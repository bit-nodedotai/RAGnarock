"""Regression tests for expired access-token decoding."""

from datetime import UTC, datetime, timedelta

import jwt
import pytest

from app.api.errors import ApiError
from app.core.config import get_settings
from app.core.security import decode_access_token


@pytest.mark.parametrize(
    "seconds_in_past",
    [1, 60, 3600, 86400],
)
def test_decode_access_token_expired_raises_api_error(
    monkeypatch: pytest.MonkeyPatch,
    seconds_in_past: int,
) -> None:
    monkeypatch.setenv("JWT_SECRET", "test-secret-that-is-long-enough-32")
    get_settings.cache_clear()
    try:
        now = datetime.now(UTC)
        payload = {
            "sub": "user-test-uuid",
            "iat": now - timedelta(days=2),
            "exp": now - timedelta(seconds=seconds_in_past),
        }
        expired_token = jwt.encode(payload, "test-secret-that-is-long-enough-32", algorithm="HS256")

        with pytest.raises(ApiError) as exc_info:
            decode_access_token(expired_token)

        assert exc_info.value.status_code == 401
        assert exc_info.value.code == "invalid_token"
        assert exc_info.value.message == "The access token is invalid or expired."
    finally:
        get_settings.cache_clear()
