import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import * as transpilationService from './services/transpilationService'
// Import components
import Main from './components/main/Main'
import Projects from './components/projects/Projects'

// Import stylesheet
require('./index.scss')

// Copy the index.html file
require('file-loader?name=[name].[ext]!./index.html')

// Check which servers are up every 5 seconds
transpilationService.serverStatusChecks()

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/projects" component={Projects}/>
      <Route path="/" component={Main}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)