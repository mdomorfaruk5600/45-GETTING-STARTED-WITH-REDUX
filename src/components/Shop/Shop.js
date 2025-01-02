import React from 'react';
import Product from '../Product/Product';
import { addToCart } from './../../redux/actions/cartActions';
import { connect } from 'react-redux';

const Shop = (props) => {
    const products = [
        {name:"lenovo", id:1},
        {name:"Asus", id:2},
        {name:"Toshiba", id:3},
        {name:"Dell", id:4},
        {name:"Hp", id:5},
    ]
    console.log(props);
    return (
        <div>
            <h2 onClick={()=>addToCart(1)}>This is Shop.</h2>
            {
                products.map(pd => <Product key={pd.id} product={pd} ></Product>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    console.log(state);
    return {
        cart: state.carts,
    }
}

const mapDispatchToProps = {
    addToCart:addToCart,
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// connectToStore(Shop)

export default connect(mapStateToProps, mapDispatchToProps)(Shop);