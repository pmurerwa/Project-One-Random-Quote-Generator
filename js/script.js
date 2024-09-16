/******************************************
Treehouse FSJS Techdegree: Peace Murerwa
project 1 - A Random Quote Generator
******************************************/
/***
 * `quotes` array
 ***/
//EXCEEDS EXPECTATIONS part
//Global variable for selecting the body element in the DOM
const body = document.querySelector("body");

//The start of the quotes array.
const quotes = [
  {
    quote: "For as he thinketh in his heart, so is he.",
    source: "King Solomon",
    citation: "Proverbs in Bible",
    tags: "Proverb", //EXCEEDS EXPECTATIONS part
  },
  {
    quote: "Anyone who has never made a mistake has never tried anything new",
    source: "Albert Einstein",
    year: "1900",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams",
    source: "Eleanor Roosevelt",
  },
  {
    quote:
      "If I have seen further than others, it is by standing upon the shoulders of giants",
    source: "Isaac Newton",
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all",
    source: "Oscar Wilde",
  },
  {
    quote: "It is never too late to be what you might have been",
    source: "George Eliot",
  },
];

/***
 * `getRandomQuote` function
 ***/

/**
 * Returns a random number between two numbers.
 * @return {number} The random number value.
 */
function getRandomQuote() {
  //get random number index and retrieve a quote on that random number index
  const randomNumber = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomNumber];
  return randomQuote;
}
/***
 * `printQuote` function
 ***/

/**
 * A function that returns a random quote string.
 * @return {number} Returns a random quote string.
 */
const printQuote = function () {
  const randomQuoteObject = getRandomQuote();
  let quoteString = `
  <p class="quote"> ${randomQuoteObject.quote} </p>
  <p class="source"> ${randomQuoteObject.source}`;

  if (randomQuoteObject.citation) {
    quoteString += `<span class="citation"> ${randomQuoteObject.citation}</span>`;
  }
  if (randomQuoteObject.year) {
    quoteString += `<span class="year"> ${randomQuoteObject.year}</span>`;
  }
  //EXCEEDS EXPECTATIONS part
  if (randomQuoteObject.tags) {
    quoteString += `<span class="tags"> ${randomQuoteObject.tags}</span>`;
  }
  quoteString += "</p>";
  document.getElementById("quote-box").innerHTML = quoteString;
  body.style.backgroundColor = getRandomBackgroundColor();
};

//EXCEEDS EXPECTATIONS part
/**
 * A function that returns a random background color string.
 * @return {number} Returns a random quote string.
 */
function getRandomBackgroundColor() {
  var R = Math.floor(Math.random() * 256);
  var G = Math.floor(Math.random() * 256);
  var B = Math.floor(Math.random() * 256);
  var randomcolor = "rgb(" + R + "," + G + "," + B + ")";
  return randomcolor;
}

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);

//EXCEEDS EXPECTATIONS part
// Call setInterval every 15secs to auto refresh quotes on the page regardless if the user clicks show another quote or not.
setInterval(printQuote, 15000);
