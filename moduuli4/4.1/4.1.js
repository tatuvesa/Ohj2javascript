const searchForm = document.getElementById('searchForm');
const queryInput = document.getElementById('query');
const resultDiv = document.getElementById('result');

searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const query = queryInput.value;
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            resultDiv.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error:', error));
});
