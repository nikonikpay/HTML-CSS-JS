// Get quote from api
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('quote-container');
const newQuoteBtn = document.getElementById('new-quote');


async function getQuote() {
    const proxyURL = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'
    try {
        const response = await fetch(proxyURL + apiUrl);
        const data = await response.json();

        // If Author is blankd then add unknown
        if (data.quoteAuthor === ''){
            authorText.innerText = 'unknown'
        }else{
            authorText.innerText = data.quoteAuthor;
        }

        // Reduce font size for long quote
        if (data.quoteText.length > 50){
            quoteText.classList.add('long-quote');

        }else{
            quoteText.classList.remove('long-quote');
        }

        quoteText.innerText = data.quoteText;

    } catch (e) {
        getQuote();

    }
}

//on Load
getQuote();

