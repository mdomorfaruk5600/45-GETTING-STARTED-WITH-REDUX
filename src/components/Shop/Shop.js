import React from 'react';
import Product from '../Product/Product';
import { addToCart } from './../../redux/actions/cartActions';
import { connect } from 'react-redux';

const Shop = (props) => {
    const {products, addToCart} = props;
    return (
        <div>
            <h2 >This is Shop.</h2>
            {
                products.map(pd => <Product key={pd.id} product={pd} addToCart={addToCart} ></Product>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        carts: state.carts,
        products:state.products,
    }
}

const mapDispatchToProps = {
    addToCart:addToCart,
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// connectToStore(Shop)

export default connect(mapStateToProps, mapDispatchToProps)(Shop);