import ProductItem from "./ProductItem"

import donuts from "../data/Donuts"
import './Products.css';

function Products() {

    return (
      <div className="products-container">
          {donuts.map( (donut) => <ProductItem key={donut.id} title={donut.name} description={donut.description} image={donut.image} /> )}
      </div>
    );
  }
  
  export default Products;
  