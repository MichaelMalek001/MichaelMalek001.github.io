import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Card from 'react-bootstrap/Card';
import trainer1 from './trainer1.png';
import trainer2 from './trainer2.jpg';
import trainer3 from './trainer3.jpg';
import trainer4 from './trainer4.jpg';
import Modal from 'react-bootstrap/Modal';
import React from 'react';

const PersonalTraining = (props) => {
    const [modalShow, setModalShow] = React.useState(false);

    const onHide = () => {
        setModalShow(false);
    }
    return ( 
        <div className="PersonalTPage">
            <div className="container my-3 p-3" id="banner">
            <h1 className="display-3" style={{textAlign: "center"}}>Hire a personal trainer to help you reach your goals!</h1>
            <br/>
            <div className="text-center">
                <Button variant="primary" size="lg" onClick={() => setModalShow(true)}>Hire Personal Trainer {'>'}</Button>
                <Modal 
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={modalShow}>
                    <Modal.Header> 
                        <Modal.Title id="contained-modal-title-vcenter">
                            Hire Personal Trainer
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onHide}>Close</Button>
                        <Button variant="primary">Submit</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            </div>
            <br/>
            <br/>
            <Container fluid>
                <Row>
                    <Col>
                        <h1 className="display-3">Personal Training Offered</h1>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Type</th>
                                <th>Price per session ($)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={<Tooltip>Improve overall muscle strength in just a couple sessions!</Tooltip>}
                                >
                                    <tr>
                                        <td>Strength</td>
                                        <td>50</td>
                                    </tr>
                                </OverlayTrigger>  
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={<Tooltip>Improve endurance during physical activity to increase performance.</Tooltip>}
                                >
                                    <tr>
                                        <td>Cardio</td>
                                        <td>40</td>
                                    </tr>
                                </OverlayTrigger>    
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={<Tooltip>Improve the aesthetic of your body to achieve your dream body.</Tooltip>}
                                >
                                    <tr>
                                        <td>Physique</td>
                                        <td>90</td>
                                    </tr>
                                </OverlayTrigger>  
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={<Tooltip>Improve running speed and agility to greatly increase performance.</Tooltip>}
                                >
                                    <tr>
                                        <td>Speed</td>
                                        <td>70</td>
                                    </tr>
                                </OverlayTrigger>  
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                        <h1 className="display-3">Our Personal Trainers</h1>
                        <Container>
                            <Row>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={trainer1} />
                                        <Card.Body>
                                            <Card.Title>Meet John</Card.Title>
                                            <Card.Text>
                                                <b>Expertise: </b>Strength
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={trainer3} />
                                        <Card.Body>
                                            <Card.Title>Meet Alissa</Card.Title>
                                            <Card.Text>
                                                <b>Expertise: </b>Cardio
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={trainer2} />
                                            <Card.Body>
                                                <Card.Title>Meet Jacob</Card.Title>
                                                <Card.Text>
                                                    <b>Expertise: </b>Physique
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={trainer4} />
                                            <Card.Body>
                                                <Card.Title>Meet Felicia</Card.Title>
                                                <Card.Text>
                                                <b>Expertise: </b>Speed
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default PersonalTraining;