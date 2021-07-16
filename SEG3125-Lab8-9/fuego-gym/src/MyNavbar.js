import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
const MyNavbar = () => {
    const style = {
        fontSize: "30px",
        color: "white",
        backgroundColor: "Maroon",
        borderRadius: "20px"
    };
    return ( 
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">Fuego Gym</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/personal">Personal Training</Nav.Link>
                    <Nav.Link href="/group">Group Classes</Nav.Link>
                    <Nav.Link href="/memberships">Memberships</Nav.Link>
                    <NavDropdown title="Language" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">English</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.2">French</NavDropdown.Item>
      </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
/*         <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
        <a className="navbar-brand" style={style} href="#">Fuego Gym</a>
        <Nav.Item>
            <Nav.Link href="/home" style={{fontSize: "25px"}}>Personal Training</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1" style={{fontSize: "25px"}}>Group Classes</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2" style={{fontSize: "25px"}}>Memberships</Nav.Link>
        </Nav.Item>
        </Nav> */
     );
}
 
export default MyNavbar;