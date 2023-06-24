const introNote = document.getElementsByClassName("intro__summary__note")[0];

document.addEventListener("scroll", (event) =>{
  if(window.scrollY > 700){
    introNote.classList.add("intro__summary__note--transition");
  } 
});
