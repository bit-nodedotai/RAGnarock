# Responsive layout guide

This guide records the current workspace layout and gives contributors a baseline for responsive components. The main workspace already stacks document and chat panels on narrow screens and uses a two-column layout on larger screens.

Keep the dark slate surfaces and sky accents legible as panels rearrange; responsive changes must preserve the same contrast and focus treatment.

## Breakpoints

Use Tailwind's existing responsive utilities, such as `sm:` and `lg:`. Prefer content-driven breakpoints over device labels.

## Mobile

Keep upload controls and chat input usable at narrow widths. The initial Sidebar has an explicit Menu button; its collapsed state is testable through `aria-expanded`.

## Tablet

Let panels use the available width and retain comfortable padding. Avoid fixed widths that cause horizontal scrolling.

## Desktop

The current workspace caps content at `max-w-6xl` and places documents beside chat at `lg` width. Preserve readable line lengths.

## Navigation

The application currently has only the `/` workspace route. Do not invent destinations for a settings page or dashboard; add links only when routes exist.

## Testing

The component test environment is jsdom and does not render real breakpoints. Test responsive controls through their accessible interaction state and use a browser for visual breakpoint checks.
