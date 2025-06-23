import React, { useState, useEffect } from 'react';
import Product from './Product';
import { useProductContext } from './Context/ProductContext';
import { Container } from 'react-bootstrap-v5';
import BreadcrumbFixedTop from './BreadcrumbFixedTop';
import HomeNewslaterSection from './HomeNewslaterSection';
import SALE1 from "./assets/SALE1.png";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import CloseIcon from '@mui/icons-material/Close';

const FilterCategoryPage = () => {
    const { products } = useProductContext();
    const [filters, setFilters] = useState({
        category: 'All',
        search: '',
    });
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    useEffect(() => {
        let result = [...products];

        if (filters.category !== 'All')
            result = result.filter(p => p.category === filters.category);

        if (filters.search)
            result = result.filter(p => p.ProductName.toLowerCase().includes(filters.search.toLowerCase()));

        setFilteredProducts(result);
    }, [filters, products]);

    return (
        <>
            <BreadcrumbFixedTop Title="Category" Subtitle="Category" />
            <section className='FilterCategoryPage'>
                <Container>
                    <div className="row">
                        <div className="col-md-3">
                            <h4 className='mb-4'>Filter Category</h4>

                            <div className=' mb-3 border-solid-voilet rounded'>
                                {['All', 'Men', 'Women', 'Kids'].map(cat => (
                                    <button key={cat} className='btn d-block mb-1' onClick={() => handleFilterChange('category', cat)}>{cat}</button>
                                ))}
                            </div>

                            <button className='btn btn-danger mt-3 ' onClick={() => setFilters({ category: 'All', color: 'All', size: 'All', brand: 'All', availability: 'All', search: '' })}>
                                Clear Filter <CloseIcon />
                            </button>

                            <img className='img-fluid mt-3' src={SALE1} alt="Sale" />
                        </div>

                        <div className="col-md-9">
                            <div className='d-flex justify-content-between mb-3'>
                                <div>
                                    <button className='btn'><FormatListBulletedIcon /></button>
                                    <button className='btn'><GridViewIcon /></button>
                                </div>
                                <div className='Product-Search-input d-flex'>
                                    <input
                                        type="text"
                                        value={filters.search}
                                        onChange={e => handleFilterChange('search', e.target.value)}
                                        placeholder='Search Product Here'
                                    />
                                    <button className='btn ms-2'>Search</button>
                                </div>
                            </div>

                            <div className="row">
                                {filteredProducts.slice(0, 12).map((product) => (
                                    <Product key={product.id} {...product} />
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <HomeNewslaterSection />
        </>
    );
};

export default FilterCategoryPage;
