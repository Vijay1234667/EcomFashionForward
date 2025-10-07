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
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
    return (
        <>
            <Navbar expand="md" className=" sticky-top">
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/">
                            <img className="img-fluid" src={EcomLogo1} alt="EcomLogo1" width="200px" loading="lazy" />
                        </NavLink>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="offcanvasNavbar" className="border-0 shadow-none">
                        <MenuIcon style={{ fontSize: "28px", color: "#ffff" }} />
                    </Navbar.Toggle>
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
                            <Nav className=" d-flex align-items-center">
                                <NavLink className="nav-link " to="/">HOME</NavLink>
                                <NavLink className="nav-link" to="/filtercategory">PRODUCTS</NavLink>
                                <NavLink className="nav-link" to="/blogs">BLOGS</NavLink>
                            </Nav>
                            <div className="d-flex align-items-center  ms-auto">
                                <InputGroup
                                    className="search-bar font-13  "
                                    style={{ width: "400px" }}
                                >
                                    <Form.Control  placeholder="Search products..." />
                                    <Button variant="dark"><FaSearch /></Button>
                                </InputGroup>
                                <NavLink to="/login" className="btn common-button ms-4 ">
                                    LOGIN
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
