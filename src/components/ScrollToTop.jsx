import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    console.log();
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
