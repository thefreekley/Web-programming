const initialState = {
    items:[],
    isLoaded:false,
};

const printersReducer = (state = initialState,action) => {
    if(action.type === 'SET_PRINTERS'){
        return{
            items:action.payload,
            isLoaded: true
        }
    }
    if(action.type === 'SET_LOADED'){
        return{
            ...state,
            isLoaded: action.payload,
        }
    }
    return state;
};

export default printersReducer;