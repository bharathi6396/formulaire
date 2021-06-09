import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      validated: false,
      isLogged: false,
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()

    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      this.setState({ isLogged: true })
    }
    this.setState({ validated: true })
  }
  renderForm = () => {
    return <div>
      <div className="head text-center">
        <h1>Login</h1>
      </div>
      <Form noValidate validated={this.state.validated}
        onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>E-mail address</Form.Label>
          <Form.Control type="email" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required placeholder="Enter Password..." />
        </Form.Group>
        <Form.Check type="checkbox" label="Remember me" />
        <Button variant="success" type="submit">Submit</Button>
      </Form>
    </div>
  }
  renderWelcome = () => {
    return <div className="p-5 bg-info text-center">
      <h1>Form submitted</h1>
    </div>
  }
  render() {
    return (
      <div className="p-3">
        {this.state.isLogged ? this.renderWelcome() : this.renderForm()}
      </div>
    )
  }
}

export default App;
