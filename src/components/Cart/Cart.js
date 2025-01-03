import React from 'react';
import { removeFromCart } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';

const Cart = props => {
    const {carts, removeFromCart} = props;
    return (
        <div>
            <h4>This is Cart.</h4>
            <ul>
                {
                    carts.map(id => <li>{id}<button onClick={()=>removeFromCart(id)}>X</button></li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        carts:state.carts,
    }
}

const mapDispatchToProps = {
    removeFromCart:removeFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);