const initialState = {
    typePrinter: 'TYPE',
    producer: 'PRODUCER',
    min:'',
    max:'',
    search:''
}

const filtersReducer = (state = initialState,action) => {
 if(action.type === 'SET_FILTER_TYPE'){
     return{
         ...state,
         typePrinter: action.payload,
     }
 }
    if(action.type === 'SET_FILTER_PRODUCER'){
        return{
            ...state,
            producer: action.payload,
        }
    }

    if(action.type === 'SET_FILTER_MIN_PRICE'){
        return{
            ...state,
            min: action.payload,
        }
    }


    if(action.type === 'SET_FILTER_MAX_PRICE'){
        return{
            ...state,
            max: action.payload,
        }
    }



    if(action.type === 'SET_FILTER_SEARCH'){
        return{
            ...state,
            search: action.payload,
        }
    }



 return state;
};

export default filtersReducer;