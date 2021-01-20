import {addItemInArray,removeItemInArray,priceAndCountOverall} from '../controller/cartController'

const initialState = {
    cartItems:[],
    priceCountOverall:{
        price:0,
        count:0,
    },

};

const cartReducer = (state = initialState,action) => {
    if(action.type === 'ADD_ITEM'){
        return{
            ...state,
            cartItems: addItemInArray(action.payload.object,
                state.cartItems,action.payload.amountOfPaint,action.payload.boxType),
            priceCountOverall: priceAndCountOverall(state.cartItems)

        }
    }
    if(action.type === 'REMOVE_ITEM'){
        return{
            ...state,
            cartItems: removeItemInArray(action.payload,state.cartItems),
            priceCountOverall: priceAndCountOverall(state.cartItems),

        }
    }

    return state;
};

export default cartReducer;