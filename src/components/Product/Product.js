import React from 'react';

const Product = (props) => {
    const {product,addToCart} = props;
    
    return (
        <div style={{border : '1px solid tomato'}}>
            <h5>{product.name}</h5>
            <h3>{product.id}</h3>
            <button onClick={()=>addToCart(product.id,product.name)}>ADD TO CART</button>
        </div>
    );
};

export default Product;