import uuid
from datetime import UTC, datetime, timedelta

import jwt
import pytest

from app.api.errors import ApiError
from app.core.config import get_settings
from app.core.security import decode_access_token


def test_decode_access_token_rejects_expired_token(monkeypatch) -> None:
    monkeypatch.setenv("JWT_SECRET", "test-secret-that-is-long-enough-32")
    get_settings.cache_clear()
    try:
        token = jwt.encode(
            {
                "sub": str(uuid.uuid4()),
                "iat": datetime.now(UTC) - timedelta(minutes=10),
                "exp": datetime.now(UTC) - timedelta(minutes=1),
            },
            "test-secret-that-is-long-enough-32",
            algorithm="HS256",
        )

        with pytest.raises(ApiError) as exc_info:
            decode_access_token(token)

        assert exc_info.value.status_code == 401
        assert exc_info.value.code == "invalid_token"
    finally:
        get_settings.cache_clear()
