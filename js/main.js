//Script for Main Content
//Ensuring DOMContent is loaded
document.addEventListener('DOMContentLoaded', () => {

    //Registering Scroll Trigger
    gsap.registerPlugin(ScrollTrigger)

    //Slogan Animation
    gsap.to('#slogan-1', {text: 'REORGANIZE.', duration: 1})
    gsap.to('#slogan-2', {text: 'REFOCUS.', duration: 1, delay: 0.3})
    gsap.to('#slogan-3', {text: 'RELOAD.', duration: 1, delay: 0.6})

    //Image animation
    gsap.from('.intro-image-container', {y:10, opacity: 0, duration: 0.7, delay: 1.1})

})