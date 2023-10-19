// Path: scripts/script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded");
    const button = document.getElementById('nappi'); // select the button element
    const navButton = document.getElementById('nav-toggle'); // select the button element
    const navItems = document.getElementsByClassName('nav-item');

    button.addEventListener('click', handleClick);
    navButton.addEventListener('click', handleClick, bubbling = true);
    console.log("Listeners added");

    function handleClick(Event) {
        if (Event.target == button) {
            button.textContent = "Javascript says hello, too!";
        } else if (Event.target.class == "nav-item") {
            console.log("nav-item clicked");
            const xhr = new XMLHttpRequest();
            const linkki = document.getElementById('linkki');
            switch (Event.target.innertext) {
                case "Home":
                    xhr.open('GET', './images/Moon.jpg', true);
                    linkki.setAttribute("href", "https://github.com/Jylant");
                    break;
                case "About":
                    xhr.open('GET', './about.html', true);
                    linkki.setAttribute("href", "https://github.com/Jylant");
                    break;
                case "Contact":
                    xhr.open('GET', './contact.html', true);
                    linkki.setAttribute("href", "https://github.com/Jylant");
                    break;
                case "Github":
                    xhr.open('GET', './images/favicon.ico', true);
                    linkki.setAttribute("href", "https://github.com/Jylant");
                    break;
                default:
                    console.log("No match");
                    break;
            }
            
            xhr.onload = function() {
                if (this.status === 200) {
                    const newContent = this.responseText;
                    const elementToReplace = document.getElementById('linkkikuva');
                    elementToReplace.setAttribute("src", newContent);
                }
            }
            xhr.send();
        }
        console.log(Event.target.nodeName);
    }

});

