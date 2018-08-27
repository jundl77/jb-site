import React, {PropTypes} from "react";
import MuiTheme from "../app/MuiTheme";

export default class App extends React.Component {

  static propTypes = {
    children: PropTypes.element.isRequired
  }

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