import React from 'react'
import QuoteBox from './components/QuoteBox'
import {connect} from 'react-redux'
import addColor from './actions/action'

const mapStateToProps = (state) => {
   return {
     color: state
   }
 }


const App = (props) => {

   const style = {
      background: props.color.reducers
   }

   return (
      <div className="content" style={style}>
         <QuoteBox />
      </div>
   )
}

export default connect(mapStateToProps, null)(App)
