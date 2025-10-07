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
                        <h5 className=" mb-2 product-name">{ProductName}</h5>
                        <p className=" mb-2 product-info">{ProductInfo1}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="product-price">&#8377;{ProductPrice}</span>
                            <span className="product-discount">{Discount}</span>
                        </div>
                        <button className="btn product-add-btn w-100 mt-2">Add to Cart</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Product;
