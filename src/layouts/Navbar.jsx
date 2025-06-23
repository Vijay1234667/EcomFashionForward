import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import EcomLogo1 from '../Component/assets/EcomLogo1.png';
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

function NavBar() {
    return (
        <>
            <Navbar expand="md" className="shadow-sm bg-white sticky-top">
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/">
                            <img className="img-fluid" src={EcomLogo1} alt="EcomLogo1" width="180px" />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                <img src={EcomLogo1} className="img-fluid" width="150px" alt="" />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="mx-auto d-flex align-items-center">
                                <NavLink className="nav-link " to="/">HOME</NavLink>
                                <NavLink className="nav-link" to="/about">ABOUT US</NavLink>
                                <NavLink className="nav-link" to="/filtercategory">PRODUCTS</NavLink>
                                <NavLink className="nav-link" to="/blogs">BLOGS</NavLink>
                                <NavLink className="nav-link" to="/contactus">CONTACT</NavLink>
                                <NavLink className="nav-link" to="/faq">FAQ</NavLink>
                            </Nav>
                            <div className="d-flex align-items-center gap-3">
                                <InputGroup className="search-bar font-13">
                                    <Form.Control  placeholder="Search products..." />
                                    <Button  variant="dark"><FaSearch /></Button>
                                </InputGroup>
                                <NavLink to="/profile" className="btn btn-light border px-3">
                                    <FaUser className="text-dark" size={20} />
                                </NavLink>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
