import {PRODUCT_ACTION} from '../constants';
import {createAction} from "@reduxjs/toolkit";

export const createProductAction = createAction(PRODUCT_ACTION.CREATE_PRODUCT);
export const editProductAction = createAction(PRODUCT_ACTION.EDIT_PRODUCT);
export const deleteProductAction = createAction(PRODUCT_ACTION.DELETE_PRODUCT);
