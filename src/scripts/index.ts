const btn = document.getElementsByClassName("nav-bar__btn--hamburger")[0];

btn.addEventListener("click", dropDown);

function dropDown() {
  const element = document.getElementsByClassName("nav-bar__drop-down")[0];
  if (
    element.classList[1] === undefined ||
    element.classList[1] === "__hidden"
  ) {
    element.classList.remove("__hidden");
    element.classList.add("__visible");
  } else {
    element.classList.remove("__visible");
    element.classList.add("__hidden");
  }
}
