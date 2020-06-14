import React from 'react'
import QuoteBox from './components/QuoteBox'
import {connect} from 'react-redux'

const mapStateToProps = state => {
   return {
      color: state
   }
}

const App = ({color}) => {

   return (
      <div className="content" style={{background: color.reducers, transition: 'background 0.5s linear'}}>
         <QuoteBox />
      </div>
   )
}

export default connect(mapStateToProps, null)(App)
