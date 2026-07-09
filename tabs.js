const tabButtons = {
  higherLower: document.getElementById("tab-higher-lower"),
  oddManOut: document.getElementById("tab-odd-man-out"),
};

const gameSections = {
  higherLower: document.getElementById("higher-lower-game"),
  oddManOut: document.getElementById("odd-man-out-game"),
};

function showGame(name) {
  Object.keys(gameSections).forEach((key) => {
    gameSections[key].classList.toggle("hidden", key !== name);
    tabButtons[key].classList.toggle("active", key === name);
  });
}

tabButtons.higherLower.addEventListener("click", () => showGame("higherLower"));
tabButtons.oddManOut.addEventListener("click", () => showGame("oddManOut"));
