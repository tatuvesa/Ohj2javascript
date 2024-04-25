document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const queryInput = document.getElementById('query');
    const resultDiv = document.getElementById('result');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        const query = queryInput.value;
        fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the data to the console
                resultDiv.textContent = JSON.stringify(data, null, 2); // Display the data in the page
            })
            .catch(error => console.error('Error:', error));
    });
});