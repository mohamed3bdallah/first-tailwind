
setTheme();

if (
  document.documentElement.classList.toggle(
    "light",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  )
) {
  document.getElementById("toggle").checked = true;

}

document.getElementById("toggle").addEventListener("change", function () {
  if (this.checked) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }

  setTheme();

  
});
function setTheme() {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }