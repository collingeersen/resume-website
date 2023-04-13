const btnHamburger = document.getElementsByClassName("nav-bar__btn--hamburger")[0];
const btnExit = document.getElementsByClassName("nav-bar__dropdown__btn--exit")[0];
const mainExit = document.getElementsByClassName("main")[0];
//const span = document.querySelectorAll(".nav-bar__drop-down__span");

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
    elementDropDown.classList.remove("--visible");
    elementDropDown.classList.add("--hidden");
  }

  if (main.classList[1] === "--blur"){
    mainExit.addEventListener("click", dropDown, {once: true});
  }
}

//const sub = document.querySelectorAll(".nav-bar__drop-down__sub__content");






/*
Array.from(span).forEach(elem => {
  elem.addEventListener("click", function(event) {
    Array.from(sub).forEach(val => {
      if(
        val.classList[1] === undefined ||
        val.classList[1] === "--display-none"
      ) {
        val.classList.remove("--display-none");
        val.classList.add("--display-block");
      } else {
        val.classList.remove("--display-block");
        val.classList.add("--display-none");
      }
      
    })
  } , false)
  
})*/

//span.addEventListener("click", spanCollapse);
 
//for (let i = 0; i < span.length; i++){
  //span[i].addEventListener("click", spanCollapse);
//}

/*span.forEach(function(elem) {
  elem.addEventListener("click", function() {
    if(
      sub.classList[1] === undefined ||
      sub.classList[1] === "--display-none"
    ) {
      sub.classList.remove("--display-none");
      sub.classList.add("--display-block");
    } else {
      sub.classList.remove("--display-block");
      sub.classList.add("--display-none");
    }
  })
}) */

//function spanCollapse() {
 // let sub = document.getElementsByClassName("nav-bar__drop-down__sub__content")[0];
//}
  /*
  for (let i = 0; i < span.length; i++){
  
  if(
    sub.classList[1] === undefined ||
    sub.classList[1] === "--display-none"
  ) {
    sub.classList.remove("--display-none");
    sub.classList.add("--display-block");
  } else {
    sub.classList.remove("--display-block");
    sub.classList.add("--display-none");
  }
  }


}*/
