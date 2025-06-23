import React from 'react'
import './css/Home.css';
import { Container } from 'react-bootstrap-v5';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useProductContext } from './Context/ProductContext';

import { Pagination, Navigation } from 'swiper/modules';

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
            <section className=" mb-2 ">
                <Container>
                    <div className="banner-product-all-categories-main-body mt-2">
                        <h4 className='mb-2 font-19'>Shop By Category</h4>
                        <p>Shop the latest products from the most popular collections</p>
                        <div className="row text-center ">
                            <Swiper
                                slidesPerView={6}
                                loop={true}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                                breakpoints={{
                                    0: {
                                        slidesPerView: 2,
                                    },
                                    576: {
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    1024: {
                                        slidesPerView: 6,
                                    },
                                }}
                            >
                                <SwiperSlide className='p-md-2  rounded me-2 border-solid-voilet' >
                                        <Link onClick={() => handleCategoryFilter("Men")} to="/CategorySingle">
                                            <img className="img-fluid mb-2" src={cmen} alt="ShopImage" />
                                            <h6 className='mb-5 text-dark font-14'>Men's Wear</h6>
                                        </Link>
                                </SwiperSlide>

                                <SwiperSlide className='p-md-2  rounded me-2 border-solid-voilet' >
                                        <Link onClick={() => handleCategoryFilter("Women")} to="/CategorySingle">
                                            <img className="img-fluid mb-2" src={cwomen} alt="ShopImage" />
                                            <h6 className='text-dark font-14'>Women Wear</h6>
                                        </Link>
                                </SwiperSlide>

                                <SwiperSlide className='p-md-2  rounded me-2 border-solid-voilet' >
                                        <Link onClick={() => handleCategoryFilter("Watch")} to="/CategorySingle">
                                            <img className="img-fluid mb-2" src={cwatch} alt="ShopImage" />
                                            <h6 className='text-dark mb-5 font-14'>Smart Watch</h6>
                                        </Link>
                                </SwiperSlide>

                                <SwiperSlide className='p-md-2  rounded me-2 border-solid-voilet' >
                                        <Link onClick={() => handleCategoryFilter("Kids")} to="/CategorySingle">
                                            <img className="img-fluid mb-2" src={ckid} alt="ShopImage" />
                                            <h6 className='text-dark mb-5 font-14'>Kids Wear</h6>
                                        </Link>
                                </SwiperSlide>

                                <SwiperSlide className='p-md-2  rounded me-2 border-solid-voilet' >
                                        <Link onClick={() => handleCategoryFilter("Sunglasses")} to="/CategorySingle">
                                            <img className="img-fluid mb-2" src={csunglass} alt="ShopImage" />
                                            <h6 className='text-dark mb-5 font-14'>Sunglasses</h6>
                                        </Link>
                                </SwiperSlide>

                                <SwiperSlide className='p-md-2  rounded me-2 border-solid-voilet' >
                                        <Link onClick={() => handleCategoryFilter("Shoes")} to="/CategorySingle">
                                            <img className="img-fluid mb-2" src={cshoes} alt="ShopImage" />
                                            <h6 className='text-dark mb-5 font-14'>Casual Shoes</h6>
                                        </Link>
                                </SwiperSlide>

                                <SwiperSlide className='p-md-2  rounded me-2 border-solid-voilet' >
                                        <Link onClick={() => handleCategoryFilter("Bags")} to="/CategorySingle">
                                            <img className="img-fluid mb-2" src={cbag} alt="ShopImage" />
                                            <h6 className='text-dark mb-5 font-14'>Bag</h6>
                                        </Link>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default HomeSection1
