import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import addColor from '../actions/actions'
import { FaTwitterSquare, FaQuoteLeft, FaFacebookSquare } from 'react-icons/fa'

const mapStateToProps = state => {
   return {
      color: state,
   }
}

const mapDispatchToProps = dispatch => {
   return {
      addNewColor: color => {
         dispatch(addColor(color))
      },
   }
}

const QuoteBox = ({ color, addNewColor }) => {
   const quotes = [
      {
         text: 'C’est en vain qu’on cherche au loin le bonheur quand on oublie de le cultiver soi-même.',
         author: 'Jean-Jacques Rousseau',
      },
      {
         text:
            'Être heureux ne signifie pas que tout est parfait. Cela signifie que vous avez décidé de regarder au-delà des imperfections.',
         author: 'Aristote',
      },
      {
         text:
            'Le bonheur est un parfum que l’on ne peut répandre sur autrui, sans en faire rejaillir quelques gouttes sur soi-même.',
         author: 'Ralph Waldo Emerson',
      },
      {
         text: 'Le plaisir peut s’appuyer sur l’illusion, mais le bonheur repose sur la vérité.',
         author: 'Nicolas de Chamfort',
      },
      {
         text:
            'Plus nous sommes concernés par le bonheur des autres, plus nous construisons en même temps le nôtre.',
         author: 'Dalaï Lama',
      },
      {
         text:
            'Tous les hommes pensent que le bonheur se trouve au sommet de la montagne alors qu’il réside dans la façon de la gravir.',
         author: 'Confucius',
      },
      {
         text: 'J’ai décidé d’être heureux parce que c’est bon pour la santé.',
         author: 'Voltaire',
      },
      {
         text:
            'Aimer, ce n’est pas se regarder l’un l’autre, c’est regarder ensemble dans la même direction.',
         author: 'Antoine de Saint‑Exupéry',
      },
      {
         text: 'Celui qui est le maître de lui-même est plus grand que celui qui est le maître du monde.',
         author: 'Bouddha',
      },
      {
         text: 'Une injustice commise quelque part est une menace pour la justice dans le monde entier.',
         author: 'Martin Luther King',
      },
      {
         text:
            'Mettez-vous toujours à la place de l’autre. Renoncez un temps à vos opinions, à vos jugements afin de le comprendre. Bien des conflits peuvent ainsi être évités.',
         author: 'Dalaï Lama',
      },
      {
         text:
            'La nature nous a donné une langue et deux oreilles, afin que nous écoutions le double de ce que nous disons.',
         author: 'Zenon de Citium',
      },
      {
         text:
            'Être libre, ce n’est pas seulement se débarrasser de ses chaînes ; c’est vivre d’une façon qui respecte et renforce la liberté des autres.',
         author: 'Nelson Mandela',
      },
      {
         text:
            'Le pardon libère l’âme, il fait disparaître la peur. C’est pourquoi le pardon est une arme si puissante.',
         author: 'Nelson Mandela',
      },
      {
         text:
            'Lorsque vous cherchez ce qu’il y a de bon chez les autres, vous découvrez ce qu’il y a de meilleur en vous-mêmes.',
         author: 'Martin Walsh',
      },
      {
         text:
            'Il n’y a pas de maîtrise à la fois plus grande et plus humble que celle que l’on exerce sur soi.',
         author: 'Léonard de Vinci',
      },
      {
         text:
            'Définissez le succès avec vos propres termes, atteignez-les avec vos propres règles, et construisez une vie que vous êtes fiers de vivre.',
         author: 'Anne Sweeney',
      },
      {
         text:
            'Faites comme l’arbre, changez vos feuilles et gardez vos racines. Changez vos idées et gardez vos principes.',
         author: 'Proverbe tibétain',
      },
   ]

   const [index, setIndex] = useState(0)

   const [classText, setClassText] = useState('')

   const getRandom = () => {
      setClassText('text--hide')
      setTimeout(() => {
         setIndex(Math.floor(Math.random() * quotes.length))
      }, 500)
      addNewColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
      setTimeout(() => {
         setClassText('text--display')
      }, 500)
   }

   useEffect(() => {
      getRandom()
   }, [])

   return (
      <div id='quote-box' style={{ color: color.reducers, transition: 'background 0.5s linear' }}>
         <div className='top-row'>
            <div id='text' className={classText}>
               <FaQuoteLeft style={{ marginRight: '10px' }} />
               {quotes[index].text}
            </div>
            <div id='author'>- {quotes[index].author}</div>
         </div>

         <div className='bottom-row'>
            <div class='socials'>
               <a id='fb-quote' href='#'>
                  <FaFacebookSquare
                     size='40px'
                     color={color.reducers}
                     style={{ transition: 'color 0.5s linear' }}
                  />
               </a>
               <a id='tweet-quote' href='https://twitter.com/intent/tweet'>
                  <FaTwitterSquare
                     size='40px'
                     color={color.reducers}
                     style={{ transition: 'color 0.5s linear' }}
                  />
               </a>
            </div>
            <button
               id='new-quote'
               style={{ background: color.reducers, transition: 'background 0.5s linear' }}
               onClick={getRandom}
            >
               Nouvelle citation
            </button>
         </div>
      </div>
   )
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox)
