import React from 'react';
import { removeFromCart } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';

const Cart = (props) => {
    console.log(props);
    const {cart, removeFromCart} = props;
    const cart1= cart.newItem;
 
    console.log(cart1);
    return (
        <div>
            <h3>This is cart</h3>
            <p>{cart1.name}</p>
            {/* <ul>
                {
                    cart.map(product=><li>{product.id} <button onClick={removeFromCart(product.cartId)}>X</button></li>)
                }
            </ul> */}
        </div>
    );
};

const mapStateToProps = state=>{
    return {cart:state.cart}
}
const mapDispatchToProps = {
    removeFromCart :removeFromCart
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);