const luckyBtn = document.getElementById("luckybtn");
const logo = document.getElementById("logo");

luckyBtn.addEventListener("click", () => {
  logo.innerHTML = `<img src="./icons/odditytech_logo_400.jpg" alt="Oddity Logo" class="logo__image" />`;
});

function focusInputOnSmallScreen() {
  const input = document.querySelector(".search__input");
  if (input) {
    input.focus();
  }
}

window.addEventListener("load", focusInputOnSmallScreen);

window.addEventListener("resize", focusInputOnSmallScreen);
