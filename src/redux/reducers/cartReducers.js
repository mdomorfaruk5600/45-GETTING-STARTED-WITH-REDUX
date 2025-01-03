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
            console.log(action);
            // const newId = action.id;
            const newItem = {
                productId:action.id,
                name:action.name,
                cartId: state.carts.length + 1,
            }
            const newCart = [...state.carts, newItem];
            return {...state,carts:newCart};
        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.carts.filter(item => item.cartId !== id);

            return {...state, carts:remainingCart};
        default :
            return state;
    }
}

export default cartReducers;