//Script for Navbar operations
//Ensureing DOMContent is loaded
document.addEventListener('DOMContentLoaded', () => {

    //Function to switch theme
    function switchTheme() {

        //Checking if the theme is dark
        if (getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim() == '#1f1f1f') {
            document.documentElement.style.setProperty('--primary-color', '#e0e0e0')
            document.documentElement.style.setProperty('--secondary-color', '#1f1f1f')

            //Switching the theme icon to 'dark'
            document.getElementById('theme-toggle').innerHTML = `<i class='bx bx-moon'></i>`
        }
        else {
            document.documentElement.style.setProperty('--primary-color', '#1f1f1f')
            document.documentElement.style.setProperty('--secondary-color', '#e0e0e0')

            //Switching the theme icon to 'ligt'
            document.getElementById('theme-toggle').innerHTML = `<i class='bx bx-sun'></i>`
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


    //EVENT LISTENERS

    //Theme Toggle
    document.getElementById('theme-toggle').addEventListener('click', switchTheme)

    //Pulling menu
    document.getElementById('burger-menu').addEventListener('click', pullMenu)

    //Pushing menu
    document.getElementById('close-resp-menu').addEventListener('click', pushMenu)
});