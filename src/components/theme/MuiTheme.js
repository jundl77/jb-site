import React from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import {createMuiTheme} from '@material-ui/core/styles'


export default class MuiTheme extends React.Component {

  static propTypes = {
    children: PropTypes.element.isRequired
  }

  render() {
    const muiTheme = createMuiTheme({
      palette: {
        primary: {
          main: '#2196F3'
        }
      },
      overrides: {
        MuiCard: {
          root: {
            width: 'auto',
          },
        },
        MuiTab: {
          root: {
            textTransform: 'initial',
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