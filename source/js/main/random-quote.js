(function () {
  // ----------------- random quote -----------------
  const quoteBtn = document.querySelector('.quote__btn');
  const quoteText = document.querySelector('.quote__text');

  const generateQuote = quotesArray => {
    quotesArray.forEach(quote => {
      if (quote.author === null) {
        quote.author = 'Unknown'; // eslint-disable-next-line no-param-reassign
      }
    });
    const quote = quotesArray[Math.floor(Math.random() * 1000)];
    quoteText.innerHTML = `<p>${quote.text}</p>` + `<p class="quote__author">- ${quote.author}</p>`;
  };

  const quotesAPIEndpoint = 'https://type.fit/api/quotes'; // API call

  const getQuote = () => {
    console.log(quotesAPIEndpoint);
    fetch(quotesAPIEndpoint)
      .then(response => response.json())
      .then(data => {
        const fetchedQuotes = data.slice(0, 999); // Store an array of objects with author and quote
        generateQuote(fetchedQuotes);
      })
      .catch(err => {
        console.log('Error occured fetch quotes:', err);
        generateQuote([]);
      });
  };

  quoteBtn.addEventListener('click', () => {
    getQuote();
    quoteBtn.blur();
  });

})();
