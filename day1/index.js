// create an array of quotes objects- quotes and author
const quotes = [
    {quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde"},
    {quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde"},
    {quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde"},
    {quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde"},
    {quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde"}
];
// select the DOM elements for displaying quote & author
const quoteText = document.querySelector('.quote');
const authorText = document.querySelector('.author');
const generateBtn = document.getElementById('#generate-btn');

// add click event listener
generateBtn.addEventListener('click', ()=>{
    //generate random index within quotes array
    console.log("fine");
    const randomIndex = Math.floor(Math.random()* quotes.length); 
    const quote = quotes[randomIndex]; 
    quoteText.textContent =`${quote.quote}`;
    authorText.textContent = `${quote.author}`;
});