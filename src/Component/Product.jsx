import React from 'react';
import { Link } from 'react-router-dom';
import { useProductContext } from './Context/ProductContext';

const Product = ({ id, ProductName, ProductPrice, ProductInfo1, Discount, image }) => {
    const { base_url, public_url } = useProductContext();
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3 product-details-body">
            <Link to={`/singleproduct/${id}`}>
                <div className=" h-100 border-solid-voilet p-2 rounded-3">
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
        </div>
    );
};

export default Product;
