import React, { useState } from 'react'
import Button from 'react-bootstrap/button'
import Modal from 'react-bootstrap/modal'

import Row from 'react-bootstrap/row'
import Nav from 'react-bootstrap/nav'
import Col from 'react-bootstrap/col'
import Tab from 'react-bootstrap/tab'

import Form from 'react-bootstrap/Form'

let validated, setValidated = false;

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


export default class Example extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
      show: false,
      fullName:'',
      cardNumber:'',
      expMonth:0,
      expYear:0,
      userCVV:0
		};
  }
  

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
  }
  
  handleInputChange(event) {
    
  }

  handleSubmit(event) {
  }

	render() {
		return (
			<>
				<Button variant="primary" onClick={this.handleShow}>
					Checkout
        </Button>

				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>
              <h5>Come on! Let's check out</h5>
            </Modal.Title>
					</Modal.Header>
					<Modal.Body>
          <div >
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Nav variant="pills" fill className="justify-content-center">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Credit Card</Nav.Link>
                    </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">PayPal</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Nav variant="pills" fill className="justify-content-center">
                    <Nav.Item>
                      <Nav.Link eventKey="thrid">Bank Transfer</Nav.Link>
                    </Nav.Item>
                </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Row>
                          <Form.Label>Full name</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Please Enter Full Name"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter your full name.
                          </Form.Control.Feedback>
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Row>  
                        <Form.Row>
                          <Form.Label>Credit card number</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Please Enter Credit card number"
                          />
                        </Form.Row>  
                        <Form.Row>
                          <Form.Label>Credit card number</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Please Enter Credit card number"
                          />
                        </Form.Row>  
                        <Form.Group>
                        <Form.Row>
                          <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Exp Month</Form.Label>
                            <Form.Control type="number" placeholder="MM" required />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid city.
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group as={Col} md="3" controlId="validationCustom04">
                            <Form.Label>Exp Year</Form.Label>
                            <Form.Control type="number" placeholder="DD" required />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid state.
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <Form.Label>CVV</Form.Label>
                            <Form.Control type="number" placeholder="000" required />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid CVV.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Form.Row>
                        <Form.Check
                          required
                          label="Agree to terms and conditions"
                          feedback="You must agree before submitting."
                        />
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                    </Form>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <div>
                        <p>PayPal is the easliest way to pay online</p>
                        <p><button> <span><i class="fab fa-paypal mr-1"></i>Login my PayPal</span></button></p>
                        <p><b>Note:</b>Here are some notes.</p>
                    </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="thrid">
                    <div>
                        <p>Bank account details</p>
                        <p><b>Bank:</b></p>
                        <p>The World Bank</p>
                        <p><b>Account Number:</b></p>
                        <p>123123123</p>
                        <p><b>IBAN:</b></p>
                        <p>132132132</p>
                        <p><b>Note:</b></p>
                        <p>Here are some notes.</p>
                    </div>
                    </Tab.Pane>
                  </Tab.Content>
            </Tab.Container>
          </div>
          </Modal.Body>
				</Modal>
			</>
		);
	}
}
