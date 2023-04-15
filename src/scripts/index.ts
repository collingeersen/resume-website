//Selectors that fire the initial event
const btnHamburger = document.getElementsByClassName("nav-bar__btn--hamburger")[0];
const btnExit = document.getElementsByClassName("nav-bar__dropdown__btn--exit")[0];
const mainExit = document.getElementsByClassName("main")[0];
const toggleDisplay = document.querySelectorAll(".--toggle-display");

//Btn click events
btnHamburger.addEventListener("click", dropDown);
btnExit.addEventListener("click", dropDown);

//Used for dropdown menu toggle
function dropDown() {
  const elementDropDown = document.getElementsByClassName("nav-bar__drop-down")[0];
  const main = document.getElementsByClassName("main")[0];

  //Blurs the <main> element and everything within
  if (
    main.classList[1] === undefined ||
    main.classList[1] === "--unblur"
  ) {
    main.classList.remove("--unblur");
    main.classList.add("--blur");
  } else {
    main.classList.remove("--blur");
    main.classList.add("--unblur");
  }

  //This makes the dropdown menu either visible or hidden on the btn event
  if (
    elementDropDown.classList[1] === undefined ||
    elementDropDown.classList[1] === "--hidden"
  ) {
    elementDropDown.classList.remove("--hidden");
    elementDropDown.classList.add("--visible");
  } else {
    elementDropDown.classList.remove("--visible");
    elementDropDown.classList.add("--hidden");
  }

  //Makes it exit when clicked outside of dropdown when active 
  if (main.classList[1] === "--blur") {
    mainExit.addEventListener("click", dropDown, { once: true });
  }
}

/*
Iterates through all elements with the --display-none tag and
adds a click event specific to each sub content for toggle
*/
for (let i = 0; i < toggleDisplay.length; i++) {
  toggleDisplay[i].addEventListener("click", fun);
  const sub = document.getElementsByClassName("--" + i + "--display-none")[0];

  //Matches in order from 0 to each of the elements using i as the unique identifier
  function fun() {
    if (
      sub.classList[1] === undefined ||
      sub.classList[1] === "--" + i + "--display-none"
    ) {
      sub.classList.remove("--" + i + "--display-none");
      sub.classList.add("--" + i + "--display-block");
    } else {
      sub.classList.remove("--" + i + "--display-block");
      sub.classList.add("--" + i + "--display-none");
    }

  }
}

/*
Array.from(span).forEach(elem => {
  elem.addEventListener("click", function(event) {

    })
  
  })
  */
