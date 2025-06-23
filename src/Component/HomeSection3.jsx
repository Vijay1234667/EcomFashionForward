import React, { useEffect, useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './css/Home.css';
import { Container } from 'react-bootstrap-v5';

import Typed from "typed.js";

const HomeSection3 = () => {
    useEffect(() => {
        const options = {
          strings: ["Sunglasses", "Bag", "Watch", "Shoes"],
          typeSpeed: 180,
          backSpeed: 180,
          loop: true,
        };
        const typed = new Typed(".auto-type-textSale1", options);
    
        return () => {
          typed.destroy();
        };
      }, []);

    return (
        <>
            <section className="Limited-offers-section mt-5 mb-5">
                <Container>
                    <div className="">
                        <div className='text-center text-white'>
                            <h2 className='mb-4 font-24'>End of Season <span className='auto-type-textSale1 text-bg-danger'></span>
                                <span className='d-md-block'>Sale upto 30%</span></h2>
                            <a href="/" className='btn local-btn'> <AddShoppingCartIcon className='me-1' />Shop Now</a>
                        </div>
                    </div>

                </Container>

            </section>
        </>
    )
}

export default HomeSection3
