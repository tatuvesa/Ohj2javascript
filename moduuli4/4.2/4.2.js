const searchForm = document.getElementById('searchForm');
const queryInput = document.getElementById('query');
const resultDiv = document.getElementById('result');

searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const value_from_input = queryInput.value;
    fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
});
