$(document).ready(function() {

  $("#randomBtn").click(function() {
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
      function(json) {
      
        var htmlQuote = "";
        var htmlAuthor = "";
      
        htmlQuote = json.quoteText;
        if (json.quoteAuthor === "") {
          htmlAuthor = "-Unknown";
        } else {
          htmlAuthor = "-" + json.quoteAuthor;
        }
      
        $("#quote").html(htmlQuote);
        $("#author").html(htmlAuthor);

        var tweet = htmlQuote + " " + htmlAuthor;
        if (tweet.length > 140) {
          tweet = tweet.slice(0, 137) + "...";
        }

        var tweetURL = 'http://twitter.com/intent/tweet?text=' + encodeURIComponent(tweet);
      
      console.log(tweetURL);

      $("#tweetLink").attr("href", tweetURL); 

      });

  });

});