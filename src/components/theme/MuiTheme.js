import React from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { createMuiTheme } from '@material-ui/core/styles'


export default class MuiTheme extends React.Component {

  static propTypes = {
    children: PropTypes.element.isRequired
  }

  render() {
    const muiTheme = createMuiTheme({
      palette: {
        primary1Color: '#C62828',
        primary2Color: '#C62828',
        primary3Color: '#C62828'
      },
      overrides: {
        MuiCard: {
          root: {
            width: '500px',
          },
        },
        MuiTab: {
          root: {
            textTransform: 'initial'
          }
        }
      }
    })

    return (
      <div>
        <MuiThemeProvider theme={muiTheme}>
          <div>
            {this.props.children}
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}