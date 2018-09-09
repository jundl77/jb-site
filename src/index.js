import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
// Import components
import Main from './components/Main'

// Import stylesheet
require('./index.scss')

// Copy the index.html file
require('file-loader?name=[name].[ext]!./index.html')

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={Main}/>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)