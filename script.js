document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const html = document.documentElement;

  const setTheme = (theme) => {
    html.setAttribute("data-theme", theme);

    // Toggle icon highlighting only
    toggle.querySelector(".sun").classList.toggle("active", theme === "light");
    toggle.querySelector(".moon").classList.toggle("active", theme === "dark");

    // Tooltip
    toggle.setAttribute(
      "title",
      theme === "dark" ? "Mainīt uz gaišo režīmu" : "Mainīt uz tumšo režīmu"
    );
  };

  const current = html.getAttribute("data-theme") || "light";
  setTheme(current);

  toggle.addEventListener("click", () => {
    const newTheme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTheme(newTheme);
  });
});
