from app.core.validation.password import password_errors


def test_valid_password() -> None:
    assert password_errors("SecureP@ssw0rd") == []
    assert password_errors("valid1letter") == []


def test_password_too_short() -> None:
    errors = password_errors("short1")
    assert any("at least 8 characters" in err for err in errors)


def test_password_missing_letter() -> None:
    errors = password_errors("123456789")
    assert any("at least one letter" in err for err in errors)


def test_password_missing_digit() -> None:
    errors = password_errors("lettersOnlyHere")
    assert any("at least one digit" in err for err in errors)


def test_password_in_blocklist() -> None:
    errors = password_errors("password")
    assert any("common" in err.lower() or "guessed" in err.lower() for err in errors)

    errors_num = password_errors("12345678")
    assert any("common" in err.lower() or "guessed" in err.lower() for err in errors_num)


def test_password_multiple_errors() -> None:
    errors = password_errors("short")
    assert len(errors) >= 2
    assert any("at least 8 characters" in err for err in errors)
    assert any("at least one digit" in err for err in errors)

