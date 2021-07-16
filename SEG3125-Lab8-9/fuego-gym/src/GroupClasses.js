import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import cardio from './cardio.webp'
import weight from './w.jpg'
import speed from './speed.png'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';

const GroupClasses = () => {
    const [isEng, setLang] = React.useState(true);
    
    // 
    return ( 
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Fuego Gym</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/personal">Personal Training</Nav.Link>
                        <Nav.Link href="/group">Group Classes</Nav.Link>
                        <Nav.Link href="/memberships">Memberships</Nav.Link>
                        <NavDropdown title="Language" id="nav-dropdown">
                            <NavDropdown.Item eventKey="4.1" onSelect={() => {setLang()}}>English</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey="4.2">French</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
            <div className="container my-3 p-3" id="banner">
                <h1 className="display-3" style={{textAlign: "center"}}>Join a group fitness class led by some of the best instructors in the world!</h1>
                <div className="text-center">
                    <Button variant="primary" size="lg" onClick={() => setModalShow(true)}>Join a Class {'>'}</Button>
                </div>
                <br/>
                <br/>
                <br/>
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={cardio} />
                                <Card.Body>
                                    <Card.Title>Cardio</Card.Title>
                                    <Card.Text>
                                        This high intesity cardio session will get your heart beating!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={weight} />
                                <Card.Body>
                                    <Card.Title>Strength</Card.Title>
                                    <Card.Text>
                                        This strength session guarentees to improve the amount of weight you can lift!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={speed} />
                                <Card.Body>
                                    <Card.Title>Speed</Card.Title>
                                    <Card.Text>
                                        This speed session will make you faster than Usain Bolt!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
     );
}
 
export default GroupClasses;