import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const FilterBreadcrumb = ({ Title, Subtitle }) => {
    return (
        <>
            <>
                <section className='BreadcrumbFixedTop'>
                    <div className='BreadcrumbFixedTopBody'>
                        <h2 className='fontsize-h2'>{Title}</h2>
                        <Breadcrumb className='d-flex justify-content-center align-items-center '>
                            <Breadcrumb.Item className='BreadcrumbFixedTopSpan' href="">Home</Breadcrumb.Item>
                            <Breadcrumb.Item className='BreadcrumbFixedTopSpan' href="">{Subtitle}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </section>
            </>
        </>
    )
}

export default FilterBreadcrumb
