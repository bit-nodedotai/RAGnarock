import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useFocusTrap } from "@/hooks/use-focus-trap";

describe("useFocusTrap", () => {
  it("moves initial focus into the active container", () => {
    const root = document.createElement("section");
    root.innerHTML = '<button>First</button><button>Last</button>';
    document.body.append(root);
    const { result, rerender, unmount } = renderHook(({ active }) => useFocusTrap(active), { initialProps: { active: false } });
    result.current.current = root;
    rerender({ active: true });
    expect(document.activeElement).toBe(root.querySelector("button"));
    act(() => root.querySelectorAll("button")[1]?.focus());
    root.dispatchEvent(new KeyboardEvent("keydown", { key: "Tab", bubbles: true }));
    expect(document.activeElement).toBe(root.querySelector("button"));
    unmount();
    root.remove();
  });
});
