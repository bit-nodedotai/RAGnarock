# RAGnarok design system

This reference gives Git Together contributors a shared starting point for UI changes. The system is still being built, so check the component itself before assuming a state or variant exists.

## Color

The workspace uses a dark slate foundation with sky blue for primary actions and focus. The initial semantic values live in `frontend/src/styles/tokens.css`.

| Token | Current value | Use |
| :--- | :--- | :--- |
| `--color-background` | Slate 950 | Page background |
| `--color-surface` | Slate 900 | Panels and cards |
| `--color-text` | Slate 100 | Main text |
| `--color-text-muted` | Slate 400 | Supporting text |
| `--color-accent` | Sky 500 | Primary actions |
| `--color-focus` | Sky 400 | Keyboard focus |

## Typography

The base family is the system sans stack. Use the `--text-*` sizes for semantic labels and keep headings distinct through weight and spacing.

## Spacing

The starter scale is `--space-1` through `--space-8`. Existing panels commonly use `p-5` and `gap-4`; new work should favor a small number of consistent steps.

## Radius and elevation

Use the `--radius-*` scale for controls and panels. Existing cards use rounded corners and a subtle border rather than heavy shadows.

## Component states

The current workspace includes default, hover, disabled, loading, empty, and error states in the document and chat panels. Some reusable components are only starter versions; audit keyboard and screen reader behavior before reusing them.

The token sheet includes light values for `useTheme`, but most current panels still use explicit dark Tailwind utilities. Toggling the theme hook therefore does not recolor every existing surface yet.

## Do and do not

| Do | Do not |
| :--- | :--- |
| Keep slate surfaces and sky action colors consistent. | Add decorative gradients that compete with source content. |
| Use a visible focus treatment on controls. | Rely on color alone to communicate processing or failure. |

## Examples from the application

- `frontend/src/features/documents/status-badge.tsx` shows status tones.
- `frontend/src/features/chat/chat-panel.tsx` shows the current conversation surface.
- `frontend/src/index.css` imports Tailwind and the token layer.
