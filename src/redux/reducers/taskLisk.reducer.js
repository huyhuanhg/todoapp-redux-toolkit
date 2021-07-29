import {TASK_LIST_ACTION} from '../constants';
import {createReducer} from "@reduxjs/toolkit";

const initialState = localStorage.tasks && JSON.parse(localStorage.tasks) || {taskList: []};

const saveLocal = (taskList) => {
    localStorage.tasks = JSON.stringify(taskList);
}
const taskListReducer = createReducer(initialState, {
    [TASK_LIST_ACTION.ADD_TASK]: (state, {payload}) => {
        let task = {
            ...state,
            taskList: [
                ...state.taskList,
                payload,
            ]
        };
        saveLocal(task);
        return task;
    },
    [TASK_LIST_ACTION.EDIT_TASK]: (state, {payload}) => {
        let tasks = [...state.taskList];
        let taskIndex = tasks.findIndex(task => task.id === payload.id);
        tasks.splice(taskIndex, 1, payload);
        let newTaskList = {
            ...state,
            taskList: tasks
        }
        saveLocal(newTaskList);
        return newTaskList;
    },
    [TASK_LIST_ACTION.DELETE_TASK]: (state, {payload}) => {
        let tasks = [...state.taskList];
        let taskIndex = tasks.findIndex(task => task.id === payload.id);
        tasks.splice(taskIndex, 1);
        let newTaskList = {
            ...state,
            taskList: tasks
        }
        saveLocal(newTaskList);
        return newTaskList;
    },
});

export default taskListReducer;
