import React from 'react'
import PropTypes from 'prop-types'

App.propTypes = {
  children: PropTypes.element.isRequired
}

export default class App extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}