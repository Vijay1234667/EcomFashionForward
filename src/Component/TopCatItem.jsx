import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import { useProductContext } from './Context/ProductContext';

const TopCatItem = () => {
    const { featureProducts } = useProductContext();
    let base_url = process.env.REACT_APP_BASE_URL;
    let public_url = process.env.PUBLIC_URL;

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
           
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
                    slidesPerView: 4,
                },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {featureProducts.slice(3,8).map(({ id, ProductName, ProductPrice, ProductInfo1, Discount, image }) => (
                <SwiperSlide key={id}>
                    <Link to={`/singleproduct/${id}`}>
                        <div className=" h-100 border-solid-voilet p-2 rounded-3 product-details-body">
                            <div className="position-relative">
                                <img src={`${base_url}${public_url}/${image}`} alt={ProductName} className="card-img-top product-img" />
                            </div>
                            <div className="card-body text-center py-2">
                                <h5 className="text-dark font-15 mb-2">{ProductName}</h5>
                                <p className=" text-muted font-13 mb-2">{ProductInfo1}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className=" font-18 fw-600">&#8377;{ProductPrice}</span>
                                    <span className="text-dark font-14 fw-500">{Discount}</span>
                                </div>
                                <button className=" mt-3 w-100 font-14 bg-black text-white py-2 rounded">Add to Cart</button>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TopCatItem;
