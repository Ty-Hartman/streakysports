const sections = {
  home: document.getElementById("home-screen"),
  higherLower: document.getElementById("higher-lower-game"),
  oddManOut: document.getElementById("odd-man-out-game"),
};

const tabButtons = {
  higherLower: document.getElementById("tab-higher-lower"),
  oddManOut: document.getElementById("tab-odd-man-out"),
};

function showGame(name) {
  Object.keys(sections).forEach((key) => {
    sections[key].classList.toggle("hidden", key !== name);
  });
  Object.keys(tabButtons).forEach((key) => {
    tabButtons[key].classList.toggle("active", key === name);
  });
}

document.getElementById("tab-home").addEventListener("click", () => showGame("home"));
tabButtons.higherLower.addEventListener("click", () => showGame("higherLower"));
tabButtons.oddManOut.addEventListener("click", () => showGame("oddManOut"));
document.getElementById("pick-higher-lower").addEventListener("click", () => showGame("higherLower"));
document.getElementById("pick-odd-man-out").addEventListener("click", () => showGame("oddManOut"));
