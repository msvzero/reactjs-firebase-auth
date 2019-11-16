import React, { Component } from 'react';
import firebaseApp from './config/firebaseConfig';
import LoginRegister from './components/LoginRegister';
import {Container, Row, Col} from 'reactstrap';



class App extends Component {
  state = {
    user: null
  }

  componentDidMount = () => {
    this.authListener();

  }

  authListener = () => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({
          user
        })
      } else {
        this.setState({
          user: null
        })
      }
    })

  }



  render(){
    return (
      <Container>
        <br/>
           <LoginRegister />
        {/* {this.state.user ? <Home/> : <LoginRegister />} */}
      </Container>
    );
  }
}

export default App;
