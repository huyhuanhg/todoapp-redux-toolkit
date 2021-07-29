import {PRODUCT_ACTION, TASK_LIST_ACTION} from '../constants';
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
  productList: [
    {
      id: 1,
      name: 'iPhone 12',
      price: 10000000
    },
    {
      id: 2,
      name: 'iPhone 12 Pro',
      price: 20000000
    },
    {
      id: 3,
      name: 'iPhone 12 Mini',
      price: 5000000
    },
    {
      id: 4,
      name: 'Galaxy S21',
      price: 10000000
    },
    {
      id: 5,
      name: 'Galaxy Note 20',
      price: 20000000
    },
    {
      id: 6,
      name: 'Galaxy S10',
      price: 5000000
    }
  ],
  productDetail: {},
}


const productReducer = createReducer(initialState, {
  [PRODUCT_ACTION.CREATE_PRODUCT]: (state, {payload}) => {
    return {
      ...state,
      productList: [
        payload,
        ...state.productList,
      ],
    }
  },
  [PRODUCT_ACTION.EDIT_PRODUCT]: (state, {payload}) => {
    const { id } = payload;
    const productList = [...state.productList];
    const productIndex = productList.findIndex((product) => product.id === id);
    productList.splice(productIndex, 1, payload);
    return {
      ...state,
      productList,
    };
    return {...state};
  },
  [PRODUCT_ACTION.DELETE_PRODUCT]: (state, {payload}) => {
    const { id } = payload;
    const productList = [...state.productList];
    const productIndex = productList.findIndex((product) => product.id === id);
    productList.splice(productIndex, 1);
    return {
      ...state,
      productList,
    };
  },
});

export default productReducer;
