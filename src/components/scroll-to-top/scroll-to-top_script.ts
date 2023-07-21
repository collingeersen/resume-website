const toTopScroll = document.getElementsByClassName("scroll-to-top--hidden")[0];
const btnTop = document.getElementsByClassName("scroll-to-top__btn")[0];

//Scroll Events
document.addEventListener("scroll", (event) => {
  if (window.scrollY > 180) {
    toTopScroll.classList.replace("scroll-to-top--hidden", "scroll-to-top--visible");
  } else {
    toTopScroll.classList.replace("scroll-to-top--visible", "scroll-to-top--hidden")
  }
});

//Scrolls the user back to top
let documentHeight = document.documentElement.offsetHeight;
let viewportHeight = window.innerHeight;

btnTop.addEventListener("click", (event) => {
  if (window.scrollY > 0) {
    window.scrollTo({ left: 0, top: viewportHeight - documentHeight, behavior: "smooth" });
  }
});

export{};
