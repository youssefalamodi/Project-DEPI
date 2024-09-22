let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const darkswitch = document.getElementById("darkswitch");
const lightswitch = document.getElementById("lightswitch");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") {
  enableDarkMode();
  document.getElementById("elite-logo").src = "./assets/images/logo/logo4.png";
} else {
  document.getElementById("elite-logo").src = "./assets/images/logo/logo4.png";
}
themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  // darkmode !== "active" ? enableDarkMode() : disableDarkMode();
  if (darkmode !== "active") {
    enableDarkMode();
    document.getElementById("elite-logo").src =
      "./assets/images/logo/logo4.png";
  } else {
    disableDarkMode();
    document.getElementById("elite-logo").src =
      "./assets/images/logo/logo4.png";
  }
});
darkswitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  // darkmode !== "active" ? enableDarkMode() : disableDarkMode();
  if (darkmode !== "active") {
    enableDarkMode();
    document.getElementById("elite-logo").src =
      "./assets/images/logo/Untitled.png";
  } else {
    disableDarkMode();
    document.getElementById("elite-logo").src =
      "./assets/images/logo/logo4.png";
  }
});
