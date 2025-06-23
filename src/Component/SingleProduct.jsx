import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useProductContext } from './Context/ProductContext';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import './css/AddToCart.css';

import { Col, Container } from 'react-bootstrap-v5';
import BreadcrumbFixedTop from './BreadcrumbFixedTop';

const API = '/db.json';

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [currentImg, setCurrentImg] = useState('');

  const { getSingleProduct, singleProduct, handleCart } = useProductContext();
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [id]);

  useEffect(() => {
    if (singleProduct[0]) {
      const mainImg = singleProduct[0].image;
      setCurrentImg('http://localhost:3001/' + mainImg);
      setTotalPrice(singleProduct[0].ProductPrice);
    }
  }, [singleProduct]);

  useEffect(() => {
    if (singleProduct.length > 0) {
      const existingProducts = JSON.parse(localStorage.getItem('itemset')) || [];
      const productExists = existingProducts.some(product => product.id === singleProduct[0].id);

      if (!productExists) {
        existingProducts.push(singleProduct[0]);
        localStorage.setItem('itemset', JSON.stringify(existingProducts));
      }
    }
  }, [singleProduct]);




  const addToMongoDB = async (product, quantity) => {
    const cartItem = {
      id: product[0].id,
      ProductName: product[0].ProductName,
      ProductPrice: product[0].ProductPrice,
      category: product[0].category,
      quantity: quantity,
    };

    try {
      const res = await fetch('http://localhost:3001/api/cart', {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItem),
      });
      
      
      console.log(res,"j");

      const data = await res.json();
      console.log('✅ Saved to MongoDB:', data);
    } catch (error) {
      console.error('❌ Error saving to MongoDB:', error);
    }
  };




  return (
    <>
      <BreadcrumbFixedTop Title={singleProduct[0]?.ProductName} />
      <Container fluid className='p-0'>
        <section className='add-to-bag-main-page padding-all'>
          <div className='container'>
            <div className='row justify-content-center flex-wrap'>
              <Col md={7} xl={6} lg={6} xs={12}>
                <div className='border rounded shadow-sm p-3 bg-white'>
                  <img
                    className='img-fluid rounded mb-3'
                    src={currentImg}
                    alt='product'
                  />

                  <div>
                    <h4 className='fw-bold mb-1'>{singleProduct[0]?.ProductName}</h4>
                    <h6 className='text-muted mb-3'>{singleProduct[0]?.ProductInfo1}</h6>

                    <div className='Product-Category d-flex align-items-baseline mb-2'>
                      <h6 className='me-2 mb-0'>Category:</h6>
                      <p className='mb-0'>{singleProduct[0]?.category}</p>
                    </div>

                    <div className='mb-2 d-flex align-items-center justify-content-between'>
                      <h5 className='mb-0 fs-3 text-success'  >
                        <span className=''>&#8377;</span>{totalPrice}
                      </h5>
                      <Link
                        className='btn btn-dark btn-lg  px-4'
                        onClick={() => {
                          handleCart(singleProduct, quantity, totalPrice);
                          addToMongoDB(singleProduct, quantity);
                        }}
                        to='/cartsingleproduct'
                      >
                        <AddShoppingCartIcon className='me-2' />
                        Add To Cart
                      </Link>

                    </div>
                  </div>
                </div>
              </Col>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default SingleProduct;
