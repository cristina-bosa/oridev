import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

// Sin atributo el tema lo decide el sistema, así que hay que resolverlo.
function resolveTheme(): Theme {
  const stored = document.documentElement.dataset.theme;

  if (stored === "light" || stored === "dark") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => setTheme(resolveTheme());

    sync();
    // Mientras no haya elección manual, seguir al sistema si cambia.
    media.addEventListener("change", sync);

    return () => media.removeEventListener("change", sync);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isDark}
      className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-solid border-border text-ink hover:border-brand hover:text-brand"
    >
      {isDark ? (
        <Sun size={18} strokeWidth={1.5} aria-hidden="true" />
      ) : (
        <Moon size={18} strokeWidth={1.5} aria-hidden="true" />
      )}
      <span className="sr-only">Dark mode</span>
    </button>
  );
}
