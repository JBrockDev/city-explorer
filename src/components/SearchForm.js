import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryString: "",
      region: {},
    };
  }

  handleSubmit = (event) => {
    console.log("Fetching data!");
    if (this.state.queryString === "") {
      return;
    };
    this.props.getCityInfo(this.state.queryString, this.state.region.us, this.state.region.eu);
  };

  handleTextInput = (event) => {
    this.setState({ queryString: event.target.value });
  };

  handleCheckBox = (event) => {
    let checked = event.target.checked ? true : false;
    if (event.target.id === "us") {
      this.setState({
        region: {
          ...this.state.region, // copies current state.region to update only one key without getting rid of the other
          us: checked,
        }
      })
    } else {
      this.setState({
        region: {
          ...this.state.region,
          eu: checked,
        }
      })
    }
  };

  render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter the name of a city </Form.Label>
            <Form.Control
              type="text"
              placeholder="Austin"
              onChange={(event) => this.handleTextInput(event)}
            />
          </Form.Group>
          <Form.Group>
            {["checkbox"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="US"
                  name="us"
                  type={type}
                  id="us"
                  onChange={(event) => this.handleCheckBox(event)}
                />
                <Form.Check
                  inline
                  label="EU"
                  name="europe"
                  type={type}
                  id="eu"
                  onChange={(event) => this.handleCheckBox(event)}
                />
              </div>
            ))}
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
