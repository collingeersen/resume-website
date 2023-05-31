//Selectors that fire the initial event
const btnHamburger = document.getElementsByClassName("nav-bar__btn--hamburger")[0];
const btnExit = document.getElementsByClassName("nav-bar__drop-down__btn--exit")[0];
const btnTop = document.getElementsByClassName("scroll-to-top__btn")[0];
const toggleDisplay = document.querySelectorAll(".--toggle-display");
const toggleExpandAll = document.getElementsByClassName("nav-bar__drop-down__header__toggle--expand")[0];
const toggleCollapseAll = document.getElementsByClassName("nav-bar__drop-down__header__toggle--collapse")[0];
const toTopScroll = document.getElementsByClassName("scroll-to-top--hidden")[0];
const navMini = document.getElementsByClassName("nav-bar--default")[0];

//Btn click events
btnHamburger.addEventListener("click", dropDown);
btnExit.addEventListener("click", dropDown);

document.addEventListener("scroll", (event) => {
  if (window.scrollY > 80){
    navMini.classList.replace("nav-bar--default", "nav-bar--mini");
  } else {
    navMini.classList.replace("nav-bar--mini", "nav-bar--default");
  }
});

document.addEventListener("scroll", (event) => {
  if (window.scrollY > 180) {
    toTopScroll.classList.replace("scroll-to-top--hidden", "scroll-to-top--visible");
  } else {
    toTopScroll.classList.replace("scroll-to-top--visible", "scroll-to-top--hidden")
  }
});

//Scrolls the user back to top
btnTop.addEventListener("click", (event) => {
  if (window.scrollY > 0) {
    window.scroll(0, 0);
  }
});

//Used for dropdown menu toggle
function dropDown() {
  const elementDropDown = document.getElementsByClassName("nav-bar__drop-down")[0];
  const main = document.getElementsByClassName("main")[0];
  const footer = document.getElementsByClassName("footer")[0];

  //Blurs the <main> element and everything within
  if (
    main.classList[1] === "--unblur"
  ) {
    main.classList.replace("--unblur", "--blur");
  } else {
    main.classList.replace("--blur", "--unblur");
  }

  //Allows the footer to also be blurred
  if (
    footer.classList[1] === "--unblur"
  ) {
    footer.classList.replace("--unblur", "--blur");
  } else {
    footer.classList.replace("--blur", "--unblur");
  }

  //This makes the dropdown menu either visible or hidden on the btn event
  if (
    elementDropDown.classList[1] === "--hidden"
  ) {
    elementDropDown.classList.replace("--hidden", "--visible");
  } else {
    elementDropDown.classList.replace("--visible", "--hidden");
  }

  //Makes it exit when clicked outside of dropdown when active 
  if (elementDropDown.classList[1] == "--visible") {
    main.addEventListener("click", dropDown)
  }
  //Needed so when exit button is pressed to removes event from main
  if (elementDropDown.classList[1] == "--hidden") {
    main.removeEventListener("click", dropDown)
  }
}

/*
Iterates through all elements with the there relevant tags and
adds a click event specific to each sub content for toggle
*/
for (let i = 0; i < toggleDisplay.length; i++) {
  toggleDisplay[i].addEventListener("click", subToggle);
  toggleExpandAll.addEventListener("click", subExpandAll);
  toggleCollapseAll.addEventListener("click", subCollapseAll);

  const sub = document.getElementsByClassName("--" + i + "--sub-collapse")[0];
  const subArrow = document.getElementsByClassName("--" + i + "--expand-more")[0];

  //Matches in order from 0 to each of the elements using i as the unique identifier
  function subToggle() {
    if (
      sub.classList[1] === "--" + i + "--sub-collapse"
    ) {
      sub.classList.replace("--" + i + "--sub-collapse",
        "--" + i + "--sub-expand");
    } else {
      sub.classList.replace("--" + i + "--sub-expand",
        "--" + i + "--sub-collapse");
    }
    if (
      subArrow.classList[1] === undefined ||
      subArrow.classList[1] === "--" + i + "--expand-more"
    ) {
      subArrow.classList.replace("--" + i + "--expand-more",
        "--" + i + "--expand-less");
    } else {
      subArrow.classList.replace("--" + i + "--expand-less",
        "--" + i + "--expand-more");
    }
  }

  function subExpandAll() {
    if (sub.classList[1] === "--sub-collapse" || "--sub-expand") {
      sub.classList.replace("--" + i + "--sub-collapse",
        "--" + i + "--sub-expand");
      subArrow.classList.replace("--" + i + "--expand-more",
        "--" + i + "--expand-less");
    }
  }

  function subCollapseAll() {
    if (sub.classList[1] === "--sub-collapse" || "--sub-expand") {
      sub.classList.replace("--" + i + "--sub-expand",
        "--" + i + "--sub-collapse");
      subArrow.classList.replace("--" + i + "--expand-less",
        "--" + i + "--expand-more");
    }
  }
}
