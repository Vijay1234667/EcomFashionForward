import React from 'react'
import { Link } from 'react-router-dom';
import { useProductContext } from './Context/ProductContext';

const MainSmallCardItems = (curElem) => {
    const { base_url, public_url } = useProductContext();

    const { id, LeftCardImg, ProductName,ProductInfo1, category, ProductPrice } = curElem;

    return (
        <>
            <Link to={`/singleproduct/${id}`}>
                <div className="border-solid-voilet p-md-2 rounded-3 mb-3">
                    <div className="row g-0 align-items-center">
                        <div className="col-3">
                            <a target="_blank" href="/">
                                <img className='img-fluid' src={`${base_url}` + `${public_url}/` + LeftCardImg} alt="LeftCardImg" />
                            </a>
                        </div>
                        <div className="col-8">
                            <div className="px-2">
                                <h5 className='text-dark font-15'>{ProductName}</h5>
                                <p className="mb-1 text-muted font-13"> {ProductInfo1}</p>
                                <span className=" font-18 fw-600">&#8377;{ProductPrice}</span>
                                <div className="d-flex justify-content-between">
                                    <div></div>
                                    <div className='mb-2'>
                                        <a href="/" className="orange-btn-btn rounded">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default MainSmallCardItems
