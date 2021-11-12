import React from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import { addToCart } from './../../redux/actions/cartActions';

const Shop = (props) => {
    console.log(props);
    const {products,addToCart} = props;
    
    return (
        <div>
            <h3>This is Shop</h3>
            {
                products.map(product=><Product 
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    ></Product>)
            }
        </div>
    );
};
const mapStateToProps = state=>{
    return {
       
        products:state.products,
    }
}
const mapDispatchToProps ={
    addToCart:addToCart
}

export default connect(mapStateToProps,mapDispatchToProps)(Shop);
