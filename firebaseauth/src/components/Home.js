import React, { Component } from 'react';
import {
    Row,
    Col,
    Button
} from 'reactstrap';
import firebaseApp from '../config/firebaseConfig';


class Home extends Component {
    comp
    logOut = () => {
        firebaseApp.auth().signOut();
    }
    render() {
        let { user } = this.props;
         return (
            <div>
                <Row>
                    <Col md={{ size: 6, offset: 3 }}>
                        <p>Welcome {`${user.email}`}</p>
                        <Button color="danger" onClick={this.logOut}>Logout</Button>
                    </Col>
                </Row>
           
            </div>
        );
    }
}

export default Home;