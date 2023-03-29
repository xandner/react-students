import React, { Component } from "react";
export default class ErrorBoundray extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: "",
    };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      errorMessage: errorInfo,
    });
  }
  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>اشتباهی رخ داده است</h1>
          <hr />
          <h5>{this.state.errorMessage}</h5>
        </>
      );
    }
    return this.props.children;
  }
}
