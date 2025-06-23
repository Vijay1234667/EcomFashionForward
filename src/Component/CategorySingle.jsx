import React from 'react'
import { Container } from 'react-bootstrap-v5';
import { useProductContext } from './Context/ProductContext';
import Col3Product from './Col3Product';
import FilterBreadcrumb from './FilterBreadcrumb';

const CategorySingle = () => {

    const { allproduct } = useProductContext();
    console.log(allproduct, "all p")


    return (
        <>
            <section>
                <FilterBreadcrumb Title={allproduct[0]?.category} Subtitle={allproduct[0]?.category}/>
                <Container>
                    <div className="row">
                        {
                            allproduct.map((curElem) => {
                                console.log("DS?", curElem)
                                return <Col3Product key={curElem.id}  {...curElem} />
                            })
                        }
                    </div>
                    <div>
                        <h6>mens wear</h6>
                    </div>

                </Container>

            </section>
        </>

    )
}

export default CategorySingle
