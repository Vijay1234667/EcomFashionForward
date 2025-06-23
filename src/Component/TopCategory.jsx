import React from 'react';
import TopCatItem from './TopCatItem';


const TopCategory = () => {

    return (
        <>
            <section className='Top-Categories-Carousel mb-4'>
                <div className="container">
                    <div>
                        <div className='text-center mt-4'>
                            <h4 className='font-17 mb-2'>Top Categories</h4>
                            <p className='text-paragraph  mb-md-4'>Select Your Favorite Categories And Purchase</p>
                        </div>
                        <div className="row justify-content-center">
                            <TopCatItem />
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}

export default TopCategory
