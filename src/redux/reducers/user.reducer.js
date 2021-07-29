import {PRODUCT_ACTION, USER_ACTION} from '../constants';
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
  userList: [
    {
      name: 'Tuan',
      email: 'lebathanhtuan@gmail.com',
      password: '123456',
      role: 'admin',
    },
    {
      name: 'Ahihi',
      email: 'ahihi@gmail.com',
      password: '123456',
      role: 'user',
    }
  ],
  userInfo: {},
}

const userReducer = createReducer(initialState, {
  [USER_ACTION.LOGIN]: (state, {payload}) => {
    return {
      ...state,
      userInfo: payload,
    };
  },
  [USER_ACTION.LOGOUT]: (state) => {
    return {
      ...state,
      userInfo: {},
    };
  },
  [USER_ACTION.REGISTER]: (state, {payload}) => {
    return {
      userInfo: {},
      userList: [
        ...state.userList,
        payload,
      ]
    };
  },
});

export default userReducer;
