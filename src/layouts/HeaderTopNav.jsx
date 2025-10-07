import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap-v5';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typed from "typed.js";
import { NavLink } from "react-router-dom";
import '../Component/css/style.css';

const HeaderTopNav = () => {
    useEffect(() => {
        const typed = new Typed(".auto-type-text", {
            strings: ["Sunglasses", "Bags", "Watches", "Shoes"],
            typeSpeed: 120,
            backSpeed: 120,
            loop: true,
        });

        return () => typed.destroy();
    }, []);

    return (
        <section className="header-top-nav bg-white d-none d-md-block ">
            <Container>
                <div className="d-flex align-items-center justify-content-between">
                    <span className="fw-bold">🌎10M+ Happy Customers</span>
                    <span className="fw-semibold d-md-none d-lg-block">
                        Introductory Offer <span className="text-danger font-14">20% Off</span> {" "}
                        <span className="auto-type-text text-primary"></span>
                    </span>

                    <div className="d-flex align-items-center gap-3">
                        <NavLink to="/" className=" font-13 fw-500 text-dark">
                            <ShoppingCartRoundedIcon className='fs-5' /> Cart
                        </NavLink>
                        <NavLink to="/" className=" font-13 fw-500 text-dark">
                            <FavoriteBorderIcon className='fs-5' /> Wishlist
                        </NavLink>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HeaderTopNav;
