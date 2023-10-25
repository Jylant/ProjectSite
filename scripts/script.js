document.addEventListener('DOMContentLoaded', () => {
    // Create a div element to hold the datetime
    const datetimeDiv = document.createElement('div');
    datetimeDiv.style.position = 'fixed';
    datetimeDiv.style.top = '0';
    datetimeDiv.style.right = '0';
    datetimeDiv.style.backgroundColor = 'transparent';
    datetimeDiv.style.padding = '10px';

    // Update the datetime every second
    setInterval(() => {
            const now = new Date();
            const day = now.getDate().toString().padStart(2, '0');
            const month = (now.getMonth() + 1).toString().padStart(2, '0');
            const year = now.getFullYear().toString();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            datetimeDiv.textContent = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    }, 1000);

    // Add the datetime div to the page
    document.body.appendChild(datetimeDiv);
});

