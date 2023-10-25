// Path: scripts/script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded");
    const button = document.getElementById('nappi'); // select the button element
    const navButton = document.getElementById('nav-toggle'); // select the button element

    button.addEventListener('click', handleClick);
    navButton.addEventListener('click', handleClick);
    console.log("Listeners added");

    function handleClick(Event) {
        if (Event.target == button) {
            button.textContent = "Javascript says hello, too!";
        } else if (Event.target.class == "nav-item") {
            console.log("nav-item clicked");
            const linkki = document.getElementById('ruutu').contentWindow.document.getElementById('kuva');
            switch (Event.target.innertext) {
                case "Home":
                    linkki.src="favicon.ico";
                    break;
                case "About":
                    linkki.src="Moon.jpg";
                    break;
                case "Contact":
                    linkki.setAttribute("href", "https://github.com/Jylant");
                    break;
                case "Github":
                    linkki.setAttribute("href", "https://github.com/Jylant");
                    break;
                default:
                    console.log("No match");
                    break;
            }
        }
        console.log(Event.target.nodeName);
    }

});

