// search.js

// Get the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('query');

// Display search results if a query exists
if (query) {
    const resultsContainer = document.getElementById('results-container');
    const searchTitle = document.getElementById('search-title');
    
    // Display the search query in the title
    searchTitle.textContent = `Results for: "${query}"`;
    
    // Create fake results for demonstration purposes
    const fakeResults = [
        `How to ${query} safely`,
        `Top 10 tips for ${query}`,
        `${query} – Complete Guide`,
        `Is ${query} legal?`,
        `${query} vs alternatives`,
    ];
    
    // Append each fake result as a list item
    fakeResults.forEach(result => {
        const resultItem = document.createElement('p');
        resultItem.textContent = result;
        resultsContainer.appendChild(resultItem);
    });
}
