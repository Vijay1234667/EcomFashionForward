import React from 'react'
import { Container } from 'react-bootstrap-v5';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { useProductContext } from './Context/ProductContext';

import { Pagination, Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';

import cmen from './assets/cmen.jpg'
import cwomen from './assets/cwomen.jpg'
import cwatch from './assets/cwatch.jpg'
import ckid from './assets/ckid.jpg'
import csunglass from './assets/csunglass.jpg'
import cbag from './assets/cbag.jpg'
import cshoes from './assets/cshoes.jpg'

const HomeSection1 = () => {
    const { handleCategoryFilter } = useProductContext();

    return (
        <>
            <section className="category-section">
                <Container>
                    <div className="category-header">
                        <div className="header-content">
                            <span className="category-badge">✨ TRENDING NOW</span>
                            <h2 className="category-title">
                                <span className="title-gradient">Shop By</span>
                                <span className="title-highlight">Category</span>
                            </h2>
                        
                        </div>
                    </div>

                    <div className="category-slider-container">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={false}
                            slidesPerView={6}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            navigation={{
                                nextEl: '.custom-next',
                                prevEl: '.custom-prev',
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                            className="category-swiper"
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 15,
                                },
                                576: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 25,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 30,
                                },
                                1200: {
                                    slidesPerView: 6,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            <SwiperSlide className="category-slide">
                                <Link onClick={() => handleCategoryFilter("Men")} to="/CategorySingle" className="category-card men-category">
                                    <div className="card-inner">
                                        <div className="image-container">
                                            <img src={cmen} alt="Men's Wear" className="category-image" />
                                            <div className="image-overlay"></div>
                                            <div className="hover-icon">👔</div>
                                        </div>
                                        <div className="card-content">
                                            <h6 className="category-name">Men's Wear</h6>
                                        </div>
                                        <div className="card-glow"></div>
                                    </div>
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide className="category-slide">
                                <Link onClick={() => handleCategoryFilter("Women")} to="/CategorySingle" className="category-card women-category">
                                    <div className="card-inner">
                                        <div className="image-container">
                                            <img src={cwomen} alt="Women's Wear" className="category-image" />
                                            <div className="image-overlay"></div>
                                            <div className="hover-icon">👗</div>
                                        </div>
                                        <div className="card-content">
                                            <h6 className="category-name">Women's Wear</h6>
                                        </div>
                                        <div className="card-glow"></div>
                                    </div>
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide className="category-slide">
                                <Link onClick={() => handleCategoryFilter("Watch")} to="/CategorySingle" className="category-card watch-category">
                                    <div className="card-inner">
                                        <div className="image-container">
                                            <img src={cwatch} alt="Smart Watches" className="category-image" />
                                            <div className="image-overlay"></div>
                                            <div className="hover-icon">⌚</div>
                                        </div>
                                        <div className="card-content">
                                            <h6 className="category-name">Smart Watches</h6>
                                        </div>
                                        <div className="card-glow"></div>
                                    </div>
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide className="category-slide">
                                <Link onClick={() => handleCategoryFilter("Kids")} to="/CategorySingle" className="category-card kids-category">
                                    <div className="card-inner">
                                        <div className="image-container">
                                            <img src={ckid} alt="Kids Wear" className="category-image" />
                                            <div className="image-overlay"></div>
                                            <div className="hover-icon">🧸</div>
                                        </div>
                                        <div className="card-content">
                                            <h6 className="category-name">Kids Wear</h6>
                                        </div>
                                        <div className="card-glow"></div>
                                    </div>
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide className="category-slide">
                                <Link onClick={() => handleCategoryFilter("Sunglasses")} to="/CategorySingle" className="category-card sunglasses-category">
                                    <div className="card-inner">
                                        <div className="image-container">
                                            <img src={csunglass} alt="Sunglasses" className="category-image" />
                                            <div className="image-overlay"></div>
                                            <div className="hover-icon">🕶️</div>
                                        </div>
                                        <div className="card-content">
                                            <h6 className="category-name">Sunglasses</h6>
                                        </div>
                                        <div className="card-glow"></div>
                                    </div>
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide className="category-slide">
                                <Link onClick={() => handleCategoryFilter("Shoes")} to="/CategorySingle" className="category-card shoes-category">
                                    <div className="card-inner">
                                        <div className="image-container">
                                            <img src={cshoes} alt="Casual Shoes" className="category-image" />
                                            <div className="image-overlay"></div>
                                            <div className="hover-icon">👟</div>
                                        </div>
                                        <div className="card-content">
                                            <h6 className="category-name">Casual Shoes</h6>
                                        </div>
                                        <div className="card-glow"></div>
                                    </div>
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide className="category-slide">
                                <Link onClick={() => handleCategoryFilter("Bags")} to="/CategorySingle" className="category-card bags-category">
                                    <div className="card-inner">
                                        <div className="image-container">
                                            <img src={cbag} alt="Bags" className="category-image" />
                                            <div className="image-overlay"></div>
                                            <div className="hover-icon">👜</div>
                                        </div>
                                        <div className="card-content">
                                            <h6 className="category-name">Bags</h6>
                                            
                                        </div>
                                        <div className="card-glow"></div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        </Swiper>

                        {/* Custom Navigation */}
                        <div className="custom-prev nav-button">
                            <svg viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className="custom-next nav-button">
                            <svg viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </Container>

             
            </section>
        </>
    )
}

export default HomeSection1