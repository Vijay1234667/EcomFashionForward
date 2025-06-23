import React from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";


import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import EcomLogo1 from '../Component/assets/EcomLogo1.png';
import BlogsRightImg8 from '../Component/assets/BlogsRightImg8.jpg'
import BlogsRightImg10 from '../Component/assets/BlogsRightImg10.jpg'
import FooterPayment from '../Component/assets/FooterPayment.png'


function FooterPage() {

    const { pathname } = useLocation();
    if (pathname === "/paymentform") return null
    else {
        return (
            <>
                <footer className="footer-section">
                    <Container>
                        <div className="row footer-top">
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-left-sec">
                                    <img className="img-fluid d-block m-auto md-mb-3 mb-1" src={EcomLogo1} alt="shopimage" width="190px"
                                        height="200px" />
                                    <p className="text-center md-mb-4 mb-3">
                                        Consectetur adipisicing elit. Laudantium fugit, sunt tenetur quid.
                                    </p>
                                    <div className="left-socials-icons text-center mb-4 md-mb-0">
                                        <a href=""><FacebookOutlinedIcon className="fs-2 text-primary" /></a>
                                        <a href="/"><TwitterIcon className="fs-2 text-success" /></a>
                                        <a href="/"><LinkedInIcon className="fs-2 text-info" /></a>
                                        <a href="/"><InstagramIcon className="fs-2 text-danger" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 mb-md-5 mb-0">
                                <h6>QUICK LINKS</h6>
                                <div className="row mb-md-0 mb-4">
                                    <div className="col-lg-6 col-6 footer-column-links">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <Link className="nav-link active" to="/">HOME</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link active" to="filtercategory">PRODUCT</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link active" to="blogs">BLOGS</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link active" to="contactus">CONTACT</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-6 col-6 footer-column-links">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <Link className="nav-link" to="gallery">GALLERY</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="about">ABOUT</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="profile">PROFILE</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="projects">OUR PROJECT</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 mb-2">
                                <h6>SOME POSTS</h6>
                                <div className="footer-post-sec d-flex align-items-center">
                                    <div className="mb-3">
                                        <img className="img-fluid" width="170px" src={BlogsRightImg8}
                                            alt="shopimage" />
                                    </div>
                                    <div className="ms-2">
                                        <span className="footer-date">APR 07 / 15</span>
                                        <p className="font-12">FUSCE TINCIDUNT ACCUMSAN PRETIUM </p>
                                    </div>
                                </div>
                                <div className="footer-post-sec d-flex align-items-center">
                                    <div>
                                        <img className="img-fluid" width="170px" src={BlogsRightImg10}
                                            alt="shopimage" />
                                    </div>
                                    <div className="ms-2">
                                        <span className="footer-date">APR 07 / 15</span>
                                        <p>FUSCE TINCIDUNT ACCUMSAN PRETIUM</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
                                <h6>POPULAR TAGS</h6>
                                <div className="footer-column-links-tags">
                                    <Link to="/">HEADPHONESS</Link>
                                    <Link to="/">successfull</Link>
                                    <Link to="/">NEW</Link>
                                    <Link to="/">WIRELESS</Link>
                                    <Link to="/">CABLES</Link>
                                    <Link to="/"> BRANDS</Link>
                                    <Link to="/"> CABLES</Link>
                                    <a href="https://vijay1234667.github.io/MYPORTFOLIO/"> SHIRT</a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-delevery-process text-white text-center">
                            <div className="row justify-content-center">
                                <div className="col-lg-2 col-md-6 col-6 mb-3 mb-md-0">
                                    <h6>Fast & Secure Delivery</h6>
                                    <p>
                                        Tell about your service.
                                    </p>
                                </div>
                                <div className="col-lg-2 col-md-6 col-6">
                                    <h6>Money Back Guarantee</h6>
                                    <p>
                                        Within 10 days. </p>
                                </div>

                                <div className="col-lg-2 col-md-6 col-6">
                                    <h6>24 Hour Return Policy</h6>
                                    <p>
                                        No question ask.
                                    </p>
                                </div>
                                <div className="col-lg-2 col-md-6 col-6">
                                    <h6>
                                        Pro Quality Support</h6>
                                    <p>
                                        24/7 Live support.
                                    </p>
                                </div>
                                <div className="col-lg-2 col-md-6 col-6">
                                    <i className="fa-solid fa-lock fs-5 mb-2"></i>
                                    <h6>Secure Checkout</h6>
                                    <p className="mb-0">
                                        full Guarantee
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="d-md-flex justify-content-evenly ">
                            <p>
                                © 2025 All rights reserved. Development by Fashion Forward
                            </p>
                            <div className="footer-social-icons">
                                <Link to="privacy" className=" text-decoration-none text-white me-2">Privacy Policy</Link> <span
                                    className="text-white">|</span>
                                <Link to="terms" className=" text-decoration-none text-white ms-2">Terms And Condition</Link>
                            </div>
                            <div className="footer-payment-icons">
                                <img className="img-fluid" src={FooterPayment} alt="shopimage" width="210" />
                            </div>
                        </div>
                    </Container>
                </footer>
            </>
        );
    }

}
export default FooterPage;