import React, { useEffect } from 'react'


import BreadcrumbFixedTop from './BreadcrumbFixedTop';

import { Container } from 'react-bootstrap-v5'



import TrendingItem1 from './assets/TrendingItem1.jpg'
import TrendingItem3 from './assets/TrendingItem3.jpg'
import TrendingItem4 from './assets/TrendingItem4.jpg'
import TrendingItem5 from './assets/TrendingItem5.jpg'
import AboutFirstRoundedImg from './assets/AboutFirstRoundedImg.jpg'
import ourteemcircleimg from './assets/ourteemcircleimg.png'
import sugardefendermoneyBack from './assets/sugardefendermoneyBack.webp'



import HomeNewslaterSection from './HomeNewslaterSection';
import Typed from "typed.js";
import TopCategory from './TopCategory';



const AboutPage = () => {

    useEffect(() => {
        const options = {
            strings: ["Shoes", "T-Shirt", "Shirt"],
            typeSpeed: 180,
            backSpeed: 180,
            loop: true,
        };
        const typed = new Typed(".auto-type-text-about", options);

        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <>
            <BreadcrumbFixedTop Title="About" Subtitle="About" />
            <section className='About-us-Page-Section padding-all'>
                <section className='Aboutus-Our-Shop'>
                    <Container>
                        <div className="row flex-column-reverse flex-md-row justify-content-center align-items-center md-mb-5 mb-4">
                            <div className="col-lg-6 mb-4 mb-md-0">
                                <div>
                                    <img className='img-fluid rounded-tp-full' src={AboutFirstRoundedImg} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className='About-Our-Shop mb-3'>
                                    <h4 className='orange-color'>Sale Of <span className='auto-type-text-about'></span></h4>
                                    <h5>Focusing on Quality
                                        Material, Good Design</h5>
                                    <p className='text-paragraph'>
                                        Donec non interdum nisl. Sed ut est ac lacus sodales convallis. Nam non velit justo. Mauris vel ultrices tortor. Proin bibendum magna porttitor porttitor suscipit. Praesent sit amet consequat eros. Quisque ullamcorper ornare vulputate. Nam sodales sem id diam sollicitudin, id lobortis tellus tincidunt.
                                    </p>
                                    <div>
                                        <img className='img-fluid' src={ourteemcircleimg} alt="" />
                                    </div>

                                    <div className='text-center'>
                                        <a href="" className='btn orange-btn-btn px-3 rounded '>See More</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

       


                <section className="money-back mb-mt py-5">
                    <div className="container">
                        <div className="row pt-5 pb-4 pb-lg-5 justify-content-center">
                            <div className="col-12 col-md-10 text-center">
                                <div className="moneyBack-box rounded-5 position-relative">
                                    <div className="moneyBack-img">
                                        <img className="img-fluid" src={sugardefendermoneyBack} alt="Sugar Defender money back guarantee" />
                                    </div>
                                    <h4 className="fw-bold mb-4 fs-2 custom-margin">Our Ironclad 60-day, Money-Back Guarantee</h4>
                                    <p>At Sugar Defender Official Store AU, we stand by the quality and effectiveness of our product with an
                                        ironclad 60-day money-back guarantee. When you purchase Sugar Defender, you have a full 60 days to
                                        experience its benefits. If you are not completely satisfied with your results, simply return the
                                        product for a full refund.</p>
                                    <p className="py-2 mb-0">This guarantee reflects our commitment to customer satisfaction and confidence in our
                                        product. Whether you’re using it to support healthy blood sugar levels, boost energy, or aid in weight
                                        loss, you can try Sugar Defender risk-free.</p>
                                    <p className="py-2 mb-0">Your satisfaction is our priority, and we believe in providing a hassle-free return
                                        process. For any questions or assistance, our dedicated support team is here to help. Enjoy the peace of
                                        mind that comes with our 60-day money-back guarantee and start your journey to better health today.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='AboutUs-Our-Work-Section'>
                    <Container>
                        <h2 className='text-center mb-5' >OUR BEST OFFERS</h2>
                        <div className="row flex-column-reverse flex-md-row  justify-content-center align-items-center  mb-5">
                            <div className="col-lg-4">
                                <div>
                                    <img className='img-fluid mb-3' src={TrendingItem1} alt="" />
                                </div>
                            </div>
                            <div className="Aboutus-Two-Cards-Section col-lg-4 mb-3">
                                <h6 className=''>T-shirt</h6>
                                <h3 className='orange-color'>Cassette tape</h3>
                                <p className='mb-3 text-paragraph'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.  iusto quae architecto aspernatur repellendus?
                                </p>
                                <div className='d-flex align-items-center'>
                                    <img src={TrendingItem1} alt="" />
                                    <div className='ms-3'>
                                        <h6>Jamie Jonson</h6>
                                        <span className='post-head-orange-text'>Avo.com</span>
                                    </div>
                                </div>
                                <div className='mt-4 transparent-btn'>
                                    <button className='btn'>VIEW PORTFOLIO</button>
                                </div>
                            </div>
                        </div>

                        <div className="row  justify-content-center align-items-center mb-5">
                            <div className="Aboutus-Two-Cards-Section col-lg-4 mb-3 ">
                                <h6>shoes</h6>
                                <h3 className='orange-color'>Miniwall Clock</h3>
                                <p className='mb-3 text-paragraph'>
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                </p>
                                <div className='d-flex align-items-center'>
                                    <img src={TrendingItem3} alt="" />
                                    <div className='ms-3'>
                                        <h5 className='mb-0'>Jamie Jonson</h5>
                                        <span className='post-head-orange-text'>Avo.com</span>
                                    </div>
                                </div>
                                <div className='mt-4 transparent-btn'>
                                    <button className='btn'>VIEW PORTFOLIO</button>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div>
                                    <img className='img-fluid' src={TrendingItem3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="row flex-column-reverse flex-md-row justify-content-center align-items-center mb-5">
                            <div className="col-lg-4">
                                <div>
                                    <img className='img-fluid' src={TrendingItem4} alt="" />
                                </div>
                            </div>
                            <div className="Aboutus-Two-Cards-Section col-lg-4 mb-3">
                                <h6>Bag</h6>
                                <h3 className='orange-color'>Avo Portfolio </h3>
                                <p className='mb-3 text-paragraph'>
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                </p>
                                <div className='d-flex align-items-center'>
                                    <img src={TrendingItem4} alt="" />
                                    <div className='ms-3'>
                                        <h5 className='mb-0'>Jamie Jonson</h5>
                                        <span className='post-head-orange-text'>Avo.com</span>
                                    </div>
                                </div>
                                <div className='mt-4 transparent-btn'>
                                    <button className='btn'>VIEW PORTFOLIO</button>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center align-items-center mb-5">
                            <div className="Aboutus-Two-Cards-Section col-lg-4 mb-3">
                                <h6>Shirt</h6>
                                <h3 className='orange-color'>Hand Writing</h3>
                                <p className='mb-3 text-paragraph'>
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                </p>
                                <div className='d-flex align-items-center'>
                                    <img src={TrendingItem5} alt="" />
                                    <div className='ms-3'>
                                        <h5 className='mb-0'>Jamie Jonson</h5>
                                        <span className='post-head-orange-text'>Avo.com</span>
                                    </div>
                                </div>
                                <div className='mt-4 transparent-btn'>
                                    <button className='btn'>VIEW PORTFOLIO</button>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div>
                                    <img className='img-fluid' src={TrendingItem5} alt="" />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                <section>
                    <TopCategory />
                </section>

                <section>
                    <HomeNewslaterSection />
                </section>
            </section>

        </>
    );
}
export default AboutPage;