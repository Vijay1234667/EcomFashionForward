

import Product from './Product';
import MainSmallCardItems from './MainSmallCardItems'

import { useProductContext } from './Context/ProductContext';
import BlogsRightImg8 from './assets/BlogsRightImg8.jpg'
import BlogsRightImg9 from './assets/BlogsRightImg9.jpg'

const HomeMainProductSection = () => {
    const { isLoading , products,bestSellingProduct } = useProductContext();
    if (isLoading) {
        return <div>.......Loading</div>
    }
    return (
        <>
            <section className="main-wrapper-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 mb-2">
                            <div>
                                <img className="img-fluid rounded-2 mb-3" src={BlogsRightImg9} alt="ShopImage" />
                            </div>
                            <div>
                                {
                                    products.slice(0,5).map((curElem) => {
                                        return <MainSmallCardItems key={curElem.id} {...curElem} />
                                    })}
                                <div>
                                    <img className="img-fluid mb-3" src={BlogsRightImg8} alt="ShopImage" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12 g-0">
                            <section className="product-cards mb-4">
                                <div className="container">
                                    <div className="row">
                                        {
                                            bestSellingProduct.map((curElem) => {
                                                return <Product key={curElem.id} {...curElem} />
                                            })
                                        }
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeMainProductSection;
