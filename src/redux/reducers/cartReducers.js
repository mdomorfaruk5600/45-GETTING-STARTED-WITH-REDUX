import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const inititalState = {
    carts:[],
    products:[
        {name:"lenovo", id:1},
        {name:"Asus", id:2},
        {name:"Toshiba", id:3},
        {name:"Dell", id:4},
        {name:"Hp", id:5},
    ],
}

const cartReducers = (state=inititalState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            const newId = action.id;
            const newCart = [...state.carts, newId];
            return {products:state.products,carts:newCart};
        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.carts.filter(item => item !== id);
            return {carts:remainingCart};
        default :
            return state;
    }
}

export default cartReducers;