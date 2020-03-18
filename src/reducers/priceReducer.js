import { ADD_FEATURE_PRICE, REMOVE_FEATURE_PRICE } from "../actions/actions";

const initialState = {
    additionalPrice: 1
};

const priceReducer = (state = initialState, action) => {
    console.log(initialState);
    switch(action.type){
        case ADD_FEATURE_PRICE:
            return {
                ...state,
                additionalPrice: state.additionalPrice + action.payload
            };
        case REMOVE_FEATURE_PRICE:
            return{
                ...state,
                additionalPrice: state.additionalPrice - action.payload
            };
        default:
            return state;
    }
};

export default priceReducer;