document.addEventListener("DOMContentLoaded", function () {
  
  const quoteText = document.getElementById("text");
  const authorText = document.getElementById("author");
  const newQuoteButton = document.getElementById("new-quote");
  const tweetQuoteButton = document.getElementById("tweet-quote");
  const facebookQuote = document.getElementById("facebook-quote")
  const quoteBox = document.getElementById("quote-box");
  const background = document.body;
  const icon = document.getElementById("ikon")

  newQuoteButton.addEventListener("click", fetchQuote);

  function fetchQuote() {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        quoteText.textContent = data.content ;
        authorText.textContent = `- ${data.author}`;
        tweetQuoteButton.href = `https://twitter.com/intent/tweet?text="${encodeURIComponent(data.content)}" - ${encodeURIComponent(data.author)}`;
        facebookQuote.href = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption="${encodeURIComponent(data.content)}" - ${encodeURIComponent(data.author)}`;
        const randomColor = getRandomColor();
        changeBackgroundColor(randomColor);
        changeTextColor(randomColor);
      });
    // .catch(error => console.error('Error fetching quote:', error));
  }

  function changeBackgroundColor(color) {
    background.style.backgroundColor = color;
    tweetQuoteButton.style.backgroundColor = color;
    facebookQuote.style.backgroundColor = color;
    newQuoteButton.style.backgroundColor = color;
  }
  function changeTextColor(color) {
    quoteText.style.color = color;
    authorText.style.color = color; 
    icon.style.color = color;
  }

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  fetchQuote();
});
