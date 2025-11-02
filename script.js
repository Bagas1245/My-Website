// script.js
const data = [
    { name: "Apple", file: "files/apple.pdf" },
    { name: "Banana", file: "files/banana.pdf" },
    { name: "Cherry", file: "files/cherry.pdf" },
    { name: "Date", file: "files/date.pdf" },
    { name: "Fig", file: "files/fig.pdf" },
    { name: "Grapes", file: "files/grapes.pdf" },
    { name: "Kiwi", file: "files/kiwi.pdf" }
];

const searchInput = document.getElementById('search');
const resultsContainer = document.getElementById('results');

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    resultsContainer.innerHTML = "";

    if (query) {
        const filteredData = data.filter(item => item.name.toLowerCase().includes(query));
        filteredData.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.name;
            li.setAttribute('data-file', item.file);

            // Add click event to download the file
            li.addEventListener('click', function() {
                const fileLink = this.getAttribute('data-file');
                const anchor = document.createElement('a');
                anchor.href = fileLink;
                anchor.download = fileLink.split('/').pop(); // Set downloaded file name
                document.body.appendChild(anchor);
                anchor.click();
                document.body.removeChild(anchor);
            });

            resultsContainer.appendChild(li);
        });
    }
});