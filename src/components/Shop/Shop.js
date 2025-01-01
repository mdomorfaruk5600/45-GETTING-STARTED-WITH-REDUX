import React from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const products = [
        {name:"lenovo", id:1},
        {name:"Asus", id:2},
        {name:"Toshiba", id:3},
        {name:"Dell", id:4},
        {name:"Hp", id:5},
    ]
    return (
        <div>
            <h2>This is Shop.</h2>
            {
                products.map(pd => <Product key={pd.id} product={pd} ></Product>)
            }
        </div>
    );
};

export default Shop;