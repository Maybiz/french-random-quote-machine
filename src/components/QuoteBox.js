import React, { useState, useEffect } from "react";
import {connect} from 'react-redux'
import addColor from '../actions/action'

const mapStateToProps = (state) => {
   return {
     color: state
   }
 }

 const mapDispatchToProps = (dispatch) => {
   return {
     addNewColor: (color) => {
       dispatch(addColor(color))
     }
   }
 }

const QuoteBox = (props) => {
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

   const [index, setIndex] = useState(0);
   const [randomColor, setRandomColor] = useState('')

	const getRandom = () => {
      setIndex(Math.floor(Math.random() * quotes.length));
      props.addNewColor(`#${Math.floor(Math.random()*16777215).toString(16)}`)
	};

	useEffect(() => {
      getRandom();
	}, []);

	return (
		<div id="quote-box">
         <div className="top-row">
            <div id="text">{quotes[index].text}</div>
            <div id="author">{quotes[index].author}</div>
         </div>
			
         <div className="bottom-row">
            <button id="new-quote" onClick={getRandom} style={{backgroundColor: props.color.reducers}}>Nouvelle citation</button>
            <a id="tweet-quote"></a>
         </div>        
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox)
