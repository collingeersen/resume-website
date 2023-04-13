const btnHamburger = document.getElementsByClassName("nav-bar__btn--hamburger")[0];
const btnExit = document.getElementsByClassName("nav-bar__dropdown__btn--exit")[0];
const mainExit = document.getElementsByClassName("main")[0];

btnHamburger.addEventListener("click", dropDown);
btnExit.addEventListener("click", dropDown);

function dropDown() {
  const elementDropDown = document.getElementsByClassName("nav-bar__drop-down")[0];
  const main = document.getElementsByClassName("main")[0];
  if(
    main.classList[1] === undefined ||
    main.classList[1] === "--unblur"
  ) {
    main.classList.remove("--unblur");
    main.classList.add("--blur");
  } else {
    main.classList.remove("--blur");
    main.classList.add("--unblur");
  }

  if (
    elementDropDown.classList[1] === undefined ||
    elementDropDown.classList[1] === "--hidden"
  ) {
    elementDropDown.classList.remove("--hidden");
    elementDropDown.classList.add("--visible");
  } else {
    elementDropDown.classList.remove("__visible");
    elementDropDown.classList.add("--hidden");
  }

  if (main.classList[1] === "--blur"){
    mainExit.addEventListener("click", dropDown, {once: true});
  }
}
