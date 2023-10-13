const cardOne = document.getElementsByClassName("--card__project--1")[0];
const contentOne = document.getElementsByClassName("--content__project--1")[0];
const cardTwo = document.getElementsByClassName("--card__project--2")[0];
const contentTwo = document.getElementsByClassName("--content__project--2")[0];
const cardThree = document.getElementsByClassName("--card__project--3")[0];
const contentThree = document.getElementsByClassName("--content__project--3")[0];
const cardFour = document.getElementsByClassName("--card__project--4")[0];
const contentFour = document.getElementsByClassName("--content__project--4")[0];
const contentDefault = document.getElementsByClassName("section-1__project-pane__frame__default")[0];
cardOne.addEventListener("click", ()=>{
    if (contentOne.classList[2] === "content-hide") {
        contentDefault.classList.replace("content-show", "content-hide");
        contentOne.classList.replace("content-hide", "content-show");
        contentTwo.classList.replace("content-show", "content-hide");
        contentThree.classList.replace("content-show", "content-hide");
        contentFour.classList.replace("content-show", "content-hide");
    }
});
cardTwo.addEventListener("click", ()=>{
    if (contentTwo.classList[2] === "content-hide") {
        contentDefault.classList.replace("content-show", "content-hide");
        contentTwo.classList.replace("content-hide", "content-show");
        contentOne.classList.replace("content-show", "content-hide");
        contentThree.classList.replace("content-show", "content-hide");
        contentFour.classList.replace("content-show", "content-hide");
    }
});
cardThree.addEventListener("click", ()=>{
    if (contentThree.classList[2] === "content-hide") {
        contentDefault.classList.replace("content-show", "content-hide");
        contentThree.classList.replace("content-hide", "content-show");
        contentOne.classList.replace("content-show", "content-hide");
        contentTwo.classList.replace("content-show", "content-hide");
        contentFour.classList.replace("content-show", "content-hide");
    }
});
cardFour.addEventListener("click", ()=>{
    if (contentFour.classList[2] === "content-hide") {
        contentDefault.classList.replace("content-show", "content-hide");
        contentFour.classList.replace("content-hide", "content-show");
        contentOne.classList.replace("content-show", "content-hide");
        contentTwo.classList.replace("content-show", "content-hide");
        contentThree.classList.replace("content-show", "content-hide");
    }
});

//# sourceMappingURL=projects-main.a7cbc6f8.js.map
