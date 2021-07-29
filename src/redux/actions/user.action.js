import {USER_ACTION} from '../constants';
import {createAction} from "@reduxjs/toolkit";

export const loginAction = createAction(USER_ACTION.LOGIN);
export const logoutAction = createAction(USER_ACTION.LOGOUT);
export const registerAction = createAction(USER_ACTION.REGISTER);