import {ProductActionTypes} from '../constants/Product-action-types';

const initialState = {
   productList: [],
   authenticatedFlag: false
}

//Initially here will be existing data 
export const productReducer = (state = initialState, action) =>{
    switch(action.type){
        case ProductActionTypes.ALL_PRODUCTS:
            return {...state, productList: action.payload};
        case ProductActionTypes.ALL_PRODUCTS:
                return {...state, productList: action.payload};
        case ProductActionTypes.SET_AUTHENTICATION_FLAG:
                return {...state, authenticatedFlag: action.payload};
        default:
            return state;

    }
}

//Initially there will be no product hence the state will be empty
export const selectedProductReducer = (state = {}, {type,payload}) =>{
    switch(type){
        case ProductActionTypes.SELECTED_PRODUCTS:
            return {...state, ...payload};
        case ProductActionTypes.REMOVE_PRODUCTS:
                return {};
        default:
            return state;

    }
}