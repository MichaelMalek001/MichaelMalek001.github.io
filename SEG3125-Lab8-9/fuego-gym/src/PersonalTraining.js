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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import MyNavbar from './MyNavbar'

const PersonalTraining = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [startDate, setStartDate] = React.useState(new Date());
    const [value, onChange] = React.useState('10:00');

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');

    const onHide = () => {
        setModalShow(false);
    }
    

    const trySubmit = (e) => {
        console.log(firstName);
        console.log(lastName);
    }

    return ( 
        <div className="PersonalTPage">
            <MyNavbar/>
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
                        <form>
                            <label>First Name: </label>
                            <input type="text" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}></input>
                            <br/>
                            <br/>
                            <label>Last Name: </label>
                            <input type="text" value={lastName} onChange={(e) => {setLastName(e.target.value)}}></input>
                            <br/>
                            <br/>
                            <label for="cars">Select a Personal Trainer: </label>
                            <select name="trainers" id="trainers">
                                <option value="john">John</option>
                                <option value="alissa">Alissa</option>
                                <option value="jacob">Jacob</option>
                                <option value="felicia">Felicia</option>
                            </select>
                            <br/>
                            <br/>
                            <label>Select a date: </label>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
                            <br/>
                            <br/>
                            <label>Select a time:</label>
                            <TimePicker onChange={onChange} value={value}/>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onHide}>Close</Button>
                        <Button variant="primary" onClick={trySubmit}>Submit</Button>
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