import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

// Import components
import Main from './components/main/Main'
import Projects from './components/projects/Projects'

// Import stylesheet
require('./index.scss')

// Copy the index.html file
require('file-loader?name=[name].[ext]!./index.html')

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/projects" component={Projects}/>
      <Route path="/" component={Main}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)