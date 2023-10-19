// Path: scripts/script.js

document.addEventListener('DOMContentLoaded', function() {
    const navBar = document.getElementById('navbar'); // select the navbar element
    const button = document.getElementById('nappi'); // select the button element
    const navButton = document.getElementById('navButton'); // select the button element
    const subButtons = document.getElementsByClassName('subMenu'); // select the button element
    console.log(subButtons);
    for (const buttons in subButtons) {
        buttons.setAttribute('style', 'display: none; visibility: hidden;');
        buttons.addEventListener('click', handleMenuClick, bubbling = true);
    }

    //navBar.addEventListener('mouseover', handleMouseOver, bubbling = true);
    button.addEventListener('click', handleClick);
    navButton.addEventListener('click', handleMenuClick, bubbling = true);
    console.log("Listeners added");

    /*function handleMouseOver(EventTarget) {
        if (EventTarget == navButton) {
            navBar.firstChild.style.display = "inline-flex";
            navBar.firstChild.style.visibility = "visible";
        } else {
            navBar.firstChild.style.display = "none";
            navBar.firstChild.style.visibility = "hidden";
        }
    }*/

    function handleClick(EventTarget) {
        button.textContent = "Javascript says hello, too!";
        console.log(EventTarget.nodeName);
    }

    function handleMenuClick() {
        for (const buttons in subButtons) {
            buttons.setAttribute('style', 'display: inline-flex; visibility: visible;');
        }
    }
});

