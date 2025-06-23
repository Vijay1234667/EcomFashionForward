import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap-v5';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typed from "typed.js";
import { NavLink } from "react-router-dom";


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
        <section className="header-top-nav d-none d-md-block py-2">
            <Container>
                <div className="d-flex align-items-center justify-content-between">
                    <span className="fw-bold text-muted font-14">🌎 10M+ Happy Customers</span>
                    <span className="fw-semibold d-md-none d-lg-block">
                        Introductory Offer: <strong className="text-danger font-14">20% Off</strong> {" "}
                        <span className="auto-type-text text-primary"></span>
                    </span>

                    <div className="d-flex align-items-center gap-2 ">
                        <NavLink to="/" className=" font-12 text-dark">
                            <ShoppingCartRoundedIcon /> Cart
                        </NavLink>
                        <NavLink to="/" className=" font-12 text-dark">
                            <FavoriteBorderIcon /> Wishlist
                        </NavLink>

                        <NavLink to="/" className="font-12 glow-button">
                            20% OFF
                        </NavLink>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HeaderTopNav;
