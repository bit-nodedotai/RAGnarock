"""Password policy and validation helpers."""

__all__ = ["password_errors"]

_MIN_LENGTH = 8
_BLOCKLIST = frozenset({
    "password",
    "12345678",
    "qwerty123",
    "admin123",
})


def password_errors(password: str) -> list[str]:
    """Validate a password against policy rules.

    Returns a list of human-readable error messages. If the password satisfies
    all rules, an empty list is returned.
    """
    errors: list[str] = []

    if len(password) < _MIN_LENGTH:
        errors.append(f"Password must be at least {_MIN_LENGTH} characters long.")

    if not any(char.isalpha() for char in password):
        errors.append("Password must contain at least one letter.")

    if not any(char.isdigit() for char in password):
        errors.append("Password must contain at least one digit.")

    if password.lower() in _BLOCKLIST:
        errors.append("Password is too common and easily guessed.")

    return errors

