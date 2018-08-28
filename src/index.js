import { BrowserRouter, Route } from 'react-router-dom'
import { render } from 'preact'

// Import components
import Main from './components/main/Main'

// Import stylesheet
require('./index.scss')

// Copy the index.html file
require('file-loader?name=[name].[ext]!./index.html')

render(
  <BrowserRouter>
    <div>
      <Route path="/" component={Main}/>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)