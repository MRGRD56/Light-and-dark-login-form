let body = <HTMLElement>document.getElementsByTagName("body")[0];
let switchButton = <HTMLElement>(
  document.getElementsByClassName("switch-mode-button")[0]
);
let switchButtonIcon = <HTMLElement>document.getElementById("mode-icon");
let switchButtonText = <HTMLElement>document.getElementById("mode-text");

let isDarkMode: boolean = true;

function switchMode() {
  if (isDarkMode) {
    switchButtonIcon.innerHTML = "light_mode";
    switchButtonText.innerHTML = "Switch to dark mode";
    body.className = "body-light";
    isDarkMode = false;
  } else {
    switchButtonIcon.innerHTML = "dark_mode";
    switchButtonText.innerHTML = "Switch to light mode";
    body.className = "body-dark";
    isDarkMode = true;
  }
}

switchButton.onclick = () => {
  switchMode();
};
