import React from 'react'
import CosmeticsItem1 from './assets/CosmeticsItem1.png'
import CosmeticsItem2 from './assets/CosmeticsItem2.png'
import BlogsRightImg9 from './assets/BlogsRightImg9.jpg'
import CosmeticsItem4 from './assets/CosmeticsItem4.png'

const CosmeticsSalesSection = () => {
    return (
        <>
            <section className="Cosmetics-sales-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 mb-2 h-100">
                            <div className="card first-card  ">
                                <img className="img-fluid" src={CosmeticsItem1} alt="ShopImage"/>
                                    <span className="sale-position">-10%</span>
                                    <div className="card-body">
                                        <h5 className='font-19'>Sunglasses Sale</h5>
                                        <p className='text-paragraph'>
                                            See all Sunglasses and get 10% off at all Sunglasses
                                        </p>
                                        <div className="transparent-btn">
                                            <a href="/" className="btn">SHOP BY GLASSES</a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3  mb-2 ">
                            <div className="card second-card h-100">
                                <div className="card-body text-center">
                                    <h5 className='font-19'>Cosmetics Sales</h5>
                                    <p className='text-paragraph'>
                                        Buy Cosmetics products and get 30% off at all Cosmetics
                                    </p>
                                    <div className="transparent-btn">
                                        <a href="/" className="btn">SHOP BY Cosmetics </a>
                                    </div>
                                </div>
                                <span className="sale-position">-80%</span>
                                <div>
                                    <img className="img-fluid" src={CosmeticsItem2} alt="ShopImage"/>
                                </div>
                            </div>
                        </div>
                     
                        <div className="col-lg-3">
                            <div className="card forth-card h-100">
                                <img className="img-fluid" src={CosmeticsItem4}  alt="ShopImage"/>
                                    <span className="sale-position">-50%</span>
                                    <div className="card-body text-center">
                                        <h5 className='font-19'>SUPER SALE</h5>
                                        <p className='text-paragraph'>
                                        See all Sunglasses and get 10% off at all Sunglasses
                                        </p>
                                        <div className="transparent-btn">
                                            <a href="/" className="btn">HURRY UP!</a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-2">
                            <div className="card first-card  h-100">
                                <img className="img-fluid" src={BlogsRightImg9} alt="ShopImage"/>
                                    <span className="sale-position">-10%</span>
                                    <div className="card-body">
                                        <h5 className='font-19'>Sunglasses Sale</h5>
                                        <p className='text-paragraph'>
                                            See all Sunglasses and get 10% off at all Sunglasses
                                        </p>
                                        <div className="transparent-btn">
                                            <a href="/" className="btn">SHOP BY GLASSES</a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CosmeticsSalesSection
