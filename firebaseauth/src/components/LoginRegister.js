import React, { Component } from 'react';
import firebaseApp from '../config/firebaseConfig';
import { Form, Button, FormGroup, Label, Input, FormText, Row, Col, Alert } from 'reactstrap';



class LoginRegister extends Component {
    state = {
        email: '',
        password: '',
        firebaseErrors: ''
    }

   handleChange = (event) => {
    this.setState({
        [event.target.name]:event.target.value
    })
   }
   
   login = () => {
    console.log(this.state);
    let { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .catch(error => {
        this.setState({firebaseErrors: error.message})
    })
   }

   signUp = () => {
    let { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
        this.setState({firebaseErrors: error.message})
    })
   }

   renderErrorAlert = () => {
        return (
            <Alert color="danger">
                {this.state.firebaseErrors}
            </Alert>
        )
   }

    render() {
        return (
            <div>
                <Row>
                    <Col md={{ size: 6, offset: 3 }}>
                        {this.state.firebaseErrors != '' ? this.renderErrorAlert() : null}
                        <br />
                        <Form >
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" placeholder="email" value={this.state.email} onChange={(event) => this.handleChange(event)}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Password</Label>
                                <Input type="password" name="password" placeholder="password"  value={this.state.password} onChange={(event) => this.handleChange(event)}/>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ size: 6, offset: 3 }}>
                        <Button color="success" value="Enter" onClick={this.login}>SignIn</Button> 
                        {' '}  
                        <Button color="primary" onClick={this.signUp}>SignUp</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default LoginRegister;