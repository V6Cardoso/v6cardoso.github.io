const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
});

const observerOnce = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
});

let hiddenElements = document.querySelectorAll('.hidden');
let hiddenOnceElements = document.querySelectorAll('.hiddenOnce');

//scroll behavior
let topButton = document.querySelector('.top-button');
let intro = document.querySelector('.intro');
let navTitle = document.querySelector('.nav-title');
let navImage = document.querySelector('.nav-image');

const scrollBehavior = () => {
    if (window.scrollY > (intro.clientHeight / 2) - 50) {
        navTitle.hidden = false;
        topButton.hidden = false;
        navImage.hidden = true;
    } else {
        navTitle.hidden = true;
        topButton.hidden = true;
        navImage.hidden = false;
    }
}
window.addEventListener('load', scrollBehavior)
document.addEventListener('scroll', scrollBehavior)

hiddenElements.forEach(el => observer.observe(el));
hiddenOnceElements.forEach(el => observerOnce.observe(el));