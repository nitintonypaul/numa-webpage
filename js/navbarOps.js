//SCRIPT FOR NAVBAR OPERATIONS
//Ensuring DOMContent is loaded
document.addEventListener('DOMContentLoaded', () => {


    //FUNCTIONS

    //Function to set the theme to dark
    function setDark() {
        document.documentElement.style.setProperty('--primary-color', '#1f1f1f')
        document.documentElement.style.setProperty('--secondary-color', '#e0e0e0')

        //Switching the theme icon to 'ligt'
        document.getElementById('theme-toggle').innerHTML = `<i class='bx bx-sun'></i>`

        //Changing intro image
        document.getElementById('intro-image-container').innerHTML = `<img src="assets/numa-light.PNG">`

        //Updating localStorage with current theme
        localStorage.setItem('theme','dark')
    }

    //Function to set the theme to light
    function setLight() {
        document.documentElement.style.setProperty('--primary-color', '#e0e0e0')
        document.documentElement.style.setProperty('--secondary-color', '#1f1f1f')

        //Switching the theme icon to 'dark'
        document.getElementById('theme-toggle').innerHTML = `<i class='bx bx-moon'></i>`

        //Changing intro image
        document.getElementById('intro-image-container').innerHTML = `<img src="assets/numa-dark.PNG">`

        //Updating localStorage with current theme
        localStorage.setItem('theme','light')
    }

    //Function to switch theme
    function switchTheme() {

        //Checking if the theme is dark
        if (getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim() == '#1f1f1f') {
            setLight()
        }
        else {
            setDark()
        }
    }


    //Function to pull menu
    function pullMenu() {

        //Animation for pulling the menu
        gsap.to(".responsive-navbar-container", {height: '100vh', duration: 0.1, ease: 'power1.in'})
    }

    
    //Function to push menu
    function pushMenu() {

        //Animation for pushing the menu
        gsap.to(".responsive-navbar-container", {height: '0', duration: 0.1, ease: 'power1.in'})
    }


    //FUNCTIONALITY

    //Checking if the user has selected a theme before using localStorage
    if (localStorage.getItem('theme') !== null) {
        localStorage.getItem('theme') == 'dark' ? setDark() : setLight()
    } 
    //Checking preferred theme if the user has not selected a theme before
    else if (window.matchMedia('(prefers-color-scheme: dark').matches) {
        setDark()
    }
    else {
        setLight()
    }


    //EVENT LISTENERS

    //Theme Toggle
    document.getElementById('theme-toggle').addEventListener('click', switchTheme)

    //Pulling menu
    document.getElementById('burger-menu').addEventListener('click', pullMenu)

    //Pushing menu
    document.getElementById('close-resp-menu').addEventListener('click', pushMenu)

    //If the user clicks 'Home' on the responsive menu
    document.getElementById('resp-home').addEventListener('click', pushMenu)
});