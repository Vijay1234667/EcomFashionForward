import React from "react";
import { Container } from "react-bootstrap";
import { useProductContext } from "./Context/ProductContext";
import Col3Product from "./Col3Product";

const TrendingItems = () => {
  const { featureProducts } = useProductContext();

  return (
    <>
      <section className="">
        <Container>
          <div>
            <div className="text-center">
              <h3>Trending Items</h3>
                             <p>Shop the latest products from the most popular items</p>

            </div>

            <div className="row">
              {featureProducts.map((curElem) => {
                return (
                  <Col3Product
                    key={curElem.id}
                    title={curElem.ProdutName}
                    {...curElem}
                  />
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TrendingItems;
