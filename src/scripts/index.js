//document.getElementsByClassName("nav-bar__drop-down")[0].setAttribute('hidden', '')
/*
const btn = document.getElementsByClassName("nav-bar__btn--hamburger")[0];
const dropDown = document.getElementsByClassName("nav-bar__drop-down")[0];

const anim = [
  //{ transform: "translateX(-100em)" },
  //{ transform: "translateX(0em)" },
  { right: "100%" },
  { right: "70%" },
];

const timing = {
  duration: 200,
  iterations: 1,
};
const animation = dropDown.animate(anim, timing);

//animation.reverse();

const dropToggle = () => {
  animation.play();
  dropDown.toggleAttribute("hidden");
  //animation.reverse();
};

const temp = () => {
    animation.reverse()
};

//btn.addEventListener("click", temp);

btn.addEventListener("click", dropToggle);
*/
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
