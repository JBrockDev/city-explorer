import { Component } from "react";
import Alert from "react-bootstrap/Alert";

class Error extends Component {
  render() {
    return (
      <>
        <Alert variant="danger">
          {this.props.error.toString()}
        </Alert>
      </>
    );
  }
}

export default Error;
