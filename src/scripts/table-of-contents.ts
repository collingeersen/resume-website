let tocState = document.getElementsByClassName('toc--hide')[0];
let tocHeading = document.getElementsByClassName('toc__heading')[0];

tocHeading.addEventListener("click", () => {
    if (tocState.classList[1] === "toc--hide"){
        tocState.classList.replace("toc--hide", "toc--show");
    } else{
        tocState.classList.replace("toc--show", "toc--hide");
    }
} );
