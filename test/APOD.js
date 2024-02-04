let imageURL, imageTitle, imageDescription
const fetch = require('node-fetch'); // Make sure to install 'node-fetch' using npm install node-fetch

function init {
        const response = await fetch('https://api.nasa.gov/planetary/apod');
        const data = await response.json(); // Extract JSON from the HTTP response
        
    
    
}
async function getApod(apiKey) {
    const baseUrl = "https://api.nasa.gov/planetary/apod";
    
    // If you have an API key, include it in the request
    const params = apiKey ? { api_key: apiKey } : {};
    
    const response = await fetch(`${baseUrl}?${new URLSearchParams(params)}`);
    
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.error(`Error: ${response.status}`);
        return null;
    }
}

// Replace 'YOUR_API_KEY' with your actual NASA API key
const nasaApiKey = process.env.APOD_KEY;
getApod(nasaApiKey)
    .then(apodData => {
        if (apodData) {
            console.log("Title:", apodData.title);
            console.log("Date:", apodData.date);
            console.log("Explanation:", apodData.explanation);
            console.log("HD URL:", apodData.hdurl);
            console.log("URL:", apodData.url);
        } else {
            console.log("Failed to retrieve APOD data.");
        }
    })
    .catch(error => console.error("Error:", error));