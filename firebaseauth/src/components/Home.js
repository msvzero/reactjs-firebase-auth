import React, { Component } from 'react';
import {
    Row,
    Col,
    Button
} from 'reactstrap';


class Home extends Component {
    render() {
        let { user } = this.props;
         return (
            <div>
                <Row>
                    <Col md={{ size: 6, offset: 3 }}>
                        <p>Welcome {`username`}</p>
                        <Button color="danger">Logout</Button>
                    </Col>
                </Row>
           
            </div>
        );
    }
}

export default Home;