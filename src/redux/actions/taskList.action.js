import { TASK_LIST_ACTION } from '../constants'
import {createAction} from "@reduxjs/toolkit";

export const addTaskAction = createAction(TASK_LIST_ACTION.ADD_TASK);
export const editTaskAction = createAction(TASK_LIST_ACTION.EDIT_TASK);
export const deleteTaskAction = createAction(TASK_LIST_ACTION.DELETE_TASK);