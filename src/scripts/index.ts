import('../components/nav-bar/nav-bar_script').then();
import('../components/scroll-to-top/scroll-to-top_script').then();

const observer = new IntersectionObserver ((elements) => {
    elements.forEach((element) => {
        //console.log(element);
        if (element.isIntersecting){
            element.target.classList.add('scroll--show');
        } else {
            element.target.classList.remove('scroll--show');
        }
    });
});

const hideElements = document.querySelectorAll('.scroll--hide');
hideElements.forEach((e) => observer.observe(e));

const observerOnce = new IntersectionObserver ((elements) => {
    elements.forEach((element) => {
        //console.log(element);
        if (element.isIntersecting){
            element.target.classList.add('scroll--show--once');
        }
    });
});

const hideElementsOnce = document.querySelectorAll('.scroll--hide--once');
hideElementsOnce.forEach((e) => observerOnce.observe(e));
