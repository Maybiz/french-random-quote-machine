import React, {useState, useEffect} from "react";

const QuoteBox = () => {
   const quotes = [
      {
         text:
            "C’est en vain qu’on cherche au loin le bonheur quand on oublie de le cultiver soi-même.",
         author: "Jean-Jacques Rousseau",
      },
      {
         text:
            "Être heureux ne signifie pas que tout est parfait. Cela signifie que vous avez décidé de regarder au-delà des imperfections.",
         author: "Aristote",
      },
      {
         text:
            "Le bonheur est un parfum que l’on ne peut répandre sur autrui, sans en faire rejaillir quelques gouttes sur soi-même.",
         author: "Ralph Waldo Emerson",
      },
   ];

   const displayQuote = '';

   const random = Math.floor(Math.random() * quotes.length)

   const [index, setIndex] = useState(null)

   useEffect(() => {
      setIndex(random)
   }, [])

   return (
      <div id="quote-box">
         <div id="text"></div>
         <div id="author"></div>
         <a id="new-quote"></a>
         <a id="tweet-quote"></a>
      </div>
   );
};

export default QuoteBox;
