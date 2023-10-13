(function () {
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var parcelRequire = $parcel$global["parcelRequirec8c2"];
parcelRequire.register("1KDeX", function(module, exports) {
const $32ff426ebaf668fc$var$toggleDisplay = document.querySelectorAll(".--toggle-display");
const $32ff426ebaf668fc$var$toggleExpandAll = document.getElementsByClassName("nav-bar__drop-down__header__toggle--expand")[0];
const $32ff426ebaf668fc$var$toggleCollapseAll = document.getElementsByClassName("nav-bar__drop-down__header__toggle--collapse")[0];
const $32ff426ebaf668fc$var$btnHamburger = document.getElementsByClassName("nav-bar__btn--hamburger")[0];
const $32ff426ebaf668fc$var$btnExit = document.getElementsByClassName("nav-bar__drop-down__btn--exit")[0];
const $32ff426ebaf668fc$var$navMini = document.getElementsByClassName("nav-bar--default")[0];
//Btn click events
$32ff426ebaf668fc$var$btnHamburger.addEventListener("click", $32ff426ebaf668fc$var$dropDown);
$32ff426ebaf668fc$var$btnExit.addEventListener("click", $32ff426ebaf668fc$var$dropDown);
//Mini nav-bar scroll events
document.addEventListener("scroll", (event)=>{
    if (window.scrollY > 50) $32ff426ebaf668fc$var$navMini.classList.replace("nav-bar--default", "nav-bar--mini");
    else $32ff426ebaf668fc$var$navMini.classList.replace("nav-bar--mini", "nav-bar--default");
});
//Used for dropdown menu toggle
function $32ff426ebaf668fc$var$dropDown() {
    const elementDropDown = document.getElementsByClassName("nav-bar__drop-down")[0];
    const main = document.getElementsByClassName("main")[0];
    const footer = document.getElementsByClassName("footer")[0];
    const body = document.getElementsByTagName("body");
    //Blurs the <main> element and everything within
    //Body replace blocks user from scrolling
    if (main.classList[1] === "--undarken") {
        main.classList.replace("--undarken", "--darken");
        body[0].classList.replace("--scroll", "--scroll-block");
    } else {
        main.classList.replace("--darken", "--undarken");
        body[0].classList.replace("--scroll-block", "--scroll");
    }
    //Allows the footer to also be blurred
    if (footer.classList[1] === "--undarken") footer.classList.replace("--undarken", "--darken");
    else footer.classList.replace("--darken", "--undarken");
    //This makes the dropdown menu either visible or hidden on the btn event
    if (elementDropDown.classList[1] === "--hidden") elementDropDown.classList.replace("--hidden", "--visible");
    else elementDropDown.classList.replace("--visible", "--hidden");
    //Makes it exit when clicked outside of dropdown when active 
    if (elementDropDown.classList[1] == "--visible") main.addEventListener("click", $32ff426ebaf668fc$var$dropDown);
    //Needed so when exit button is pressed to removes event from main
    if (elementDropDown.classList[1] == "--hidden") main.removeEventListener("click", $32ff426ebaf668fc$var$dropDown);
}
/*
Iterates through all elements with the there relevant tags and
adds a click event specific to each sub content for toggle
*/ for(let i = 0; i < $32ff426ebaf668fc$var$toggleDisplay.length; i++){
    $32ff426ebaf668fc$var$toggleDisplay[i].addEventListener("click", subToggle);
    $32ff426ebaf668fc$var$toggleExpandAll.addEventListener("click", subExpandAll);
    $32ff426ebaf668fc$var$toggleCollapseAll.addEventListener("click", subCollapseAll);
    const sub = document.getElementsByClassName("--" + i + "--sub-collapse")[0];
    const subArrow = document.getElementsByClassName("--" + i + "--expand-more")[0];
    //Matches in order from 0 to each of the elements using i as the unique identifier
    function subToggle() {
        if (sub.classList[1] === "--" + i + "--sub-collapse") sub.classList.replace("--" + i + "--sub-collapse", "--" + i + "--sub-expand");
        else sub.classList.replace("--" + i + "--sub-expand", "--" + i + "--sub-collapse");
        if (subArrow.classList[1] === undefined || subArrow.classList[1] === "--" + i + "--expand-more") subArrow.classList.replace("--" + i + "--expand-more", "--" + i + "--expand-less");
        else subArrow.classList.replace("--" + i + "--expand-less", "--" + i + "--expand-more");
    }
    function subExpandAll() {
        sub.classList[1];
        sub.classList.replace("--" + i + "--sub-collapse", "--" + i + "--sub-expand");
        subArrow.classList.replace("--" + i + "--expand-more", "--" + i + "--expand-less");
    }
    function subCollapseAll() {
        sub.classList[1];
        sub.classList.replace("--" + i + "--sub-expand", "--" + i + "--sub-collapse");
        subArrow.classList.replace("--" + i + "--expand-less", "--" + i + "--expand-more");
    }
}

});

})();
//# sourceMappingURL=nav-bar_script.59453b0f.js.map
