import React, { Component } from 'react';
import {Form, Button, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';



class LoginRegister extends Component {
  state = {
    userName: '',
    password: ''
  }

  componentDidMount = () => {


  }




  render(){
    return (
      <Row>
          <Col md={{ size: 6, offset: 3 }}>
          <br/>
            <Form >
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" placeholder="email"/>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Password</Label>
                    <Input type="password" name="password" placeholder="password"/>
                </FormGroup>
                <Button color="primary">Login</Button>
            </Form>
          </Col>
      </Row>
    );
  }
}

export default LoginRegister;