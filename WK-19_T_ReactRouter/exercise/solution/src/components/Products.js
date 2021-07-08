import ProductItem from "./ProductItem"

import donuts from "../data/Donuts"


function Products() {
    return (
      <div style={{display: "flex", justifyContent: "space-around"}}>
          {donuts.map( (donut) => <ProductItem key={donut.id} title={donut.name} description={donut.description} image={donut.image} /> )}
      </div>
    );
  }
  
  export default Products;
  