import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class SearchForm extends Component {
  handleSubmit = (event) => {
    if (this.props.searchQuery === "") {
      return;
    };
    this.props.getCityInfo();
  };

  render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter the name of a city </Form.Label>
            <Form.Control
              type="text"
              placeholder="Seattle"
              onChange={(event) => this.props.changeSearchQuery(event.target.value)}
              value={this.props.searchQuery}
            />
          </Form.Group>
          <Button variant="primary" onClick={this.handleSubmit}>
            Explore!
          </Button>
        </Form>
      </>
    );
  }
}

export default SearchForm;
