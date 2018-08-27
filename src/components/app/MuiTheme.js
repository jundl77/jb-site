import React from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles";

export default class MuiTheme extends React.Component {
  render() {
    const muiTheme = createMuiTheme({
      palette: {
        primary1Color: "#C62828",
        primary2Color: "#C62828",
        primary3Color: "#C62828"
      }
    })

    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            {this.props.children}
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}