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

    //Scrolling Animation for Focus and Flow section
    gsap.from(".ff-heading", {y: 50, opacity: 0, duration: 1, scrollTrigger: { trigger: ".ff-heading", start: "top 80%", toggleActions: "play none none none"}});
    gsap.from(".ff-image-container", {y: 50, opacity: 0, duration: 0.7, scrollTrigger: { trigger: ".ff-image-container", start: "top 80%", toggleActions: "play none none none"}});
    gsap.from(".ff-description", {y: 50, opacity: 0, duration: 0.7, delay:0.2, scrollTrigger: { trigger: ".ff-description", start: "top 80%", toggleActions: "play none none none"}});

    
})