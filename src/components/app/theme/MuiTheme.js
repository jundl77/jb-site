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
        },
        secondary: {
          main: '#1d1e24'
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
        },
        MuiTooltip: {
          tooltip: {
            fontSize: '13px',
            backgroundColor: '#1d1e24',
            fontFamily: 'Roboto Mono, monospace'
          },
        },
        MuiFormControlLabel: {
          label: {
            fontFamily: 'Roboto Mono, monospace',
            color: '#212529'
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