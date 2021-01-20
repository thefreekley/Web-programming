
const initialState = {
   indexCategory:null,
};

const categoryReducer = (state = initialState,action) => {
    if(action.type === 'CHANGE_CATEGORY'){
        return{
            indexCategory: action.payload,
        }
    }
    return state;
};

export default categoryReducer;