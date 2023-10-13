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
parcelRequire.register("1a4Ip", function(module, exports) {
const $884c9cc1a1f78f35$var$toTopScroll = document.getElementsByClassName("scroll-to-top--hidden")[0];
const $884c9cc1a1f78f35$var$btnTop = document.getElementsByClassName("scroll-to-top__btn")[0];
//Scroll Events
document.addEventListener("scroll", (event)=>{
    if (window.scrollY > 180) $884c9cc1a1f78f35$var$toTopScroll.classList.replace("scroll-to-top--hidden", "scroll-to-top--visible");
    else $884c9cc1a1f78f35$var$toTopScroll.classList.replace("scroll-to-top--visible", "scroll-to-top--hidden");
});
//Scrolls the user back to top
let $884c9cc1a1f78f35$var$documentHeight = document.documentElement.offsetHeight;
let $884c9cc1a1f78f35$var$viewportHeight = window.innerHeight;
$884c9cc1a1f78f35$var$btnTop.addEventListener("click", (event)=>{
    if (window.scrollY > 0) window.scrollTo({
        left: 0,
        top: $884c9cc1a1f78f35$var$viewportHeight - $884c9cc1a1f78f35$var$documentHeight,
        behavior: "smooth"
    });
});

});

})();
//# sourceMappingURL=scroll-to-top_script.93e0bb8b.js.map
