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

/*
const span = document.getElementsByClassName("nav-bar__drop-down__toggle");

for (let i = 0; i < span.length; i++) {
  span[i].addEventListener("click", dropContent);
}


//span.addEventListener("click", dropContent);

const element = document.getElementsByClassName("nav-bar__drop-down__sub__content");
*/
/* class dropContents {
  name:
  constructor(){
    this.name = 'df';
      
      if (
        element.classList === undefined ||
        element.classList === "__none"
      ) {
        element.classList.remove("__none");
        element.classList.add("__block");
      } else {
        element.classList.remove("__block");
        element.classList.add("__none");
      } 
  }
} */
/*
function dropContent() {
  //const element = document.getElementsByClassName("nav-bar__drop-down__sub__content")[0];
  for (let i = 0; i < element.length; i++){
    //element[i].classList.add("__none")

  
  if (
    element[i].classList[i] === undefined ||
    element[i].classList[i] === "__none"
  ) {
    element[i].classList.remove("__none");
    element[i].classList.add("__block");
  } else {
    element[i].classList.remove("__block");
    element[i].classList.add("__none");
  }
  
}
}
*/

//const span = document.querySelector(".nav-bar__drop-down__toggle");
