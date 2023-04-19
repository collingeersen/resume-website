//Selectors that fire the initial event
const btnHamburger = document.getElementsByClassName("nav-bar__btn--hamburger")[0];
const btnExit = document.getElementsByClassName("nav-bar__drop-down__btn--exit")[0];
const mainExit = document.getElementsByClassName("main")[0];
const toggleDisplay = document.querySelectorAll(".--toggle-display");
const toggleExpandAll = document.getElementsByClassName("nav-bar__drop-down__header__toggle--expand")[0];
const toggleCollapseAll = document.getElementsByClassName("nav-bar__drop-down__header__toggle--collapse")[0];

//Btn click events
btnHamburger.addEventListener("click", dropDown);
btnExit.addEventListener("click", dropDown);

//Used for dropdown menu toggle
function dropDown() {
  const elementDropDown = document.getElementsByClassName("nav-bar__drop-down")[0];
  const main = document.getElementsByClassName("main")[0];

  //Blurs the <main> element and everything within
  if (
    main.classList[1] === "--unblur"
  ) {
    main.classList.replace("--unblur", "--blur");
  } else {
    main.classList.replace("--blur", "--unblur");
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
    mainExit.addEventListener("click", dropDown)
  }
  //Needed so when exit button is pressed to removes event from main
  if (elementDropDown.classList[1] == "--hidden") {
    mainExit.removeEventListener("click", dropDown)
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

  const sub = document.getElementsByClassName("--" + i + "--display-none")[0];
  const subArrow = document.getElementsByClassName("--" + i + "--expand-more")[0];

  //Matches in order from 0 to each of the elements using i as the unique identifier
  function subToggle() {
    if (
      sub.classList[1] === "--" + i + "--display-none"
    ) {
      sub.classList.replace("--" + i + "--display-none",
        "--" + i + "--display-block");
    } else {
      sub.classList.replace("--" + i + "--display-block",
        "--" + i + "--display-none");
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
    if (sub.classList[1] === "--display-none" || "--display-block") {
      sub.classList.replace("--" + i + "--display-none",
        "--" + i + "--display-block");
      subArrow.classList.replace("--" + i + "--expand-more",
        "--" + i + "--expand-less");
    }
    /*
    if(sub.classList[i] === "--display-block"){
      toggleExpandAll.classList.replace("--active", "--nonactive")
    }*/
  }

  function subCollapseAll() {
    if (sub.classList[1] === "--display-none" || "--display-block") {
      sub.classList.replace("--" + i + "--display-block",
        "--" + i + "--display-none");
      subArrow.classList.replace("--" + i + "--expand-less",
        "--" + i + "--expand-more");
    }
    /*
    if(sub.classList[i] !== "--display-none"){
      toggleCollapseAll.classList.replace("--nonactive", "--active")
    }*/
  }
}

/*
Array.from(span).forEach(elem => {
  elem.addEventListener("click", function(event) {

    })
  
  })
  */
