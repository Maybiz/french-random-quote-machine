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
      {
         text: 'La vie ne consiste pas à avoir de bonnes cartes dans ses mains, mais à bien jouer celles que nous avons.',
         author: 'Josh Billings'
      },
      {
         text: 'Je ne perds jamais. Soit je gagne, soit j’apprends.',
         author: 'Nelson Mandela'
      },
      {
         text: 'Vous devez accepter tout ce que la vie met sur votre chemin. La seule chose importante est que vous y répondiez avec courage et avec le meilleur que vous ayez à donner.',
         author: 'Eleanor Roosevelt'
      },
      {
         text: 'Concourir à rendre des êtres plus heureux, c’est mériter de l’être soi-même.',
         author: 'Jean-Jacques Rousseau'
      },
      {
         text: 'Nous ne saurons jamais tout le bien qu’un simple sourire est capable de faire. ',
         author: 'Mère Teresa'
      },
      {
         text: 'On n’a jamais perdu sa journée quand on a contribué pour sa part à faire pénétrer dans une âme un peu de gaieté et de lumière.',
         author: 'Émile de Girardin'
      },
      {
         text: 'L’esprit s’enrichit de ce qu’on lui donne, et le cœur, de ce qu’il donne. ',
         author: 'Victor Hugo'
      },
      {
         text: 'Personne ne peut sincèrement aider autrui sans s’aider soi-même : c’est l’une des plus belles compensations de la vie.',
         author: 'Ralph Waldo Emerson'
      },
      {
         text: 'Les deux jours les plus importants de votre vie sont le jour vous où êtes nés et le jour que vous découvrez pourquoi. ',
         author: 'Mark Twain'
      },
      {
         text: 'N’essaie pas d’être un homme de succès, essaie plutôt de devenir un homme de valeur.',
         author: 'Albert Einstein'
      },
      {
         text: 'Prenez le risque de requestionner les fondements mêmes sur lesquels votre existence repose. ',
         author: 'Adrien Lawrence Beaulieu'
      },
      {
         text: 'Chaque homme doit inventer son chemin.',
         author: 'Jean-Paul Sartre'
      }
   ]

   const [index, setIndex] = useState(0)

   const [classText, setClassText] = useState('')

   const getRandomIndex = () => Math.floor(Math.random() * quotes.length)

   const getRandomHslColor = () => {
      const h = Math.floor(Math.random() * 360),
            s = Math.floor(Math.random() * 100) + '%',
            l = Math.floor(Math.random() * 60) + '%'   //between 0 and 60% to get dark color
            
      return `hsl(${h},${s},${l})`
   }

   const setRandomQuote = () => {
      setClassText('text--hide')
      setTimeout(() => {
         setIndex(getRandomIndex())
      }, 500)
      addNewColor(getRandomHslColor())
      setTimeout(() => {
         setClassText('text--display')
      }, 500)
   }

   useEffect(() => {
      setIndex(getRandomIndex())
		addNewColor(getRandomHslColor())
		setClassText('animate__animated animate__zoomIn')
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
               onClick={setRandomQuote}
            >
               Nouvelle citation
            </button>
         </div>
      </div>
   )
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox)
