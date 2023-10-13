let tocState = document.getElementsByClassName("toc--hide")[0];
let tocHeading = document.getElementsByClassName("toc__heading")[0];
let tocLink = document.getElementsByClassName("toc__link");
function tocChange() {
    if (tocState.classList[1] === "toc--hide") tocState.classList.replace("toc--hide", "toc--show");
    else tocState.classList.replace("toc--show", "toc--hide");
}
tocHeading.addEventListener("click", tocChange);
for(let i = 0; i < tocLink.length + 1; i++)tocLink[i].addEventListener("click", tocChange);

//# sourceMappingURL=website.59a6e729.js.map
