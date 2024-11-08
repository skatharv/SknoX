import { Container, Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark" className="font">
            <Container>
                <Navbar.Brand as={Link} to="/"><b style={{ fontSize: "1.3rem" }}>Disbox</b></Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <NavItem href="/home">
                            <Nav.Link as={Link} to="/home" >Home</Nav.Link>
                        </NavItem>
                        <NavItem href="/setup">
                            <Nav.Link as={Link} to="/setup" >Setup</Nav.Link>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto">
                        <NavItem href="https://discord.gg/7DJAMaPUNu">
                            <Nav.Link href="https://discord.gg/7DJAMaPUNu" target="_blank" rel="noopener noreferrer">Discord server</Nav.Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default NavigationBar;