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
                        <div className=" h-100 border-solid-voilet p-2 product-details-body">
                            <div className="position-relative">
                                <img src={`${base_url}${public_url}/${image}`} alt={ProductName} className="card-img-top product-img" />
                            </div>
                            <div className="card-body text-center py-2">
                                <h5 className="product-name">{ProductName}</h5>
                                <p className="product-info">{ProductInfo1}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className=" product-price">&#8377;{ProductPrice}</span>
                                    <span className="product-discount">{Discount}</span>
                                </div>
                        <button className="btn product-add-btn w-100 mt-2">Add to Cart</button>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TopCatItem;
