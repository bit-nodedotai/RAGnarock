# Accessibility checklist for RAGnarok

Use this checklist when adding an interaction to RAGnarok. The current panels include useful labels and status text, while the new reusable components are starter implementations that still need a full keyboard and screen reader review.

## Keyboard

Make every action reachable by Tab and operable with Enter or Space. Dialogs should handle Escape only when that behavior is safe; message composition should preserve Shift+Enter for a newline.

## Focus

Keep a visible sky focus ring. When opening a modal, move focus into it, keep focus inside while it is open, and restore focus to the trigger on close. The initial modal component does not yet implement the full focus lifecycle.

## Labels

Give file inputs, question fields, and icon-only controls accessible names. Use `aria-live` or a status role for upload completion and chat pending states.

## Color contrast

Check slate and sky combinations against WCAG contrast guidance. Do not use status color as the only indication: pair it with text such as “ready” or “failed”.

## Motion

Keep motion brief and nonessential. Loading indicators must not be the only signal that a request is pending; respect reduced-motion preferences as components are refined.

## Testing

Use Testing Library role and accessible-name queries. Add keyboard tests for menus, tabs, tooltips, and dialogs rather than asserting only on CSS classes.
