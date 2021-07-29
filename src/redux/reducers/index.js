import productReducer from './product.reducer';
import userReducer from './user.reducer';
import tasks from './taskLisk.reducer';
import {configureStore} from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    productReducer,
    userReducer,
    tasks
  }
});