import('../components/nav-bar/nav-bar_script').then();
import('../components/scroll-to-top/scroll-to-top_script').then();

const OBSERVER_OPTIONS = {
    rootMargin: '0px', //This can be thought of the initial offset margin
    threshold: 1.0, //This equates to 100% of the object be present on the intersection
};

const observer = new IntersectionObserver ((elements) => {
    elements.forEach((element) => {
        if (element.isIntersecting){
            element.target.classList.add('scroll--show');
        } else {
            element.target.classList.remove('scroll--show');
        }
    });
}, OBSERVER_OPTIONS);

const hideElements = document.querySelectorAll('.scroll--hide');
hideElements.forEach((e) => observer.observe(e));

const observerOnce = new IntersectionObserver ((elements) => {
    elements.forEach((element) => {
        if (element.isIntersecting){
            element.target.classList.add('scroll--show--once');
        }
    });
}, OBSERVER_OPTIONS);

const hideElementsOnce = document.querySelectorAll('.scroll--hide--once');
hideElementsOnce.forEach((e) => observerOnce.observe(e));
