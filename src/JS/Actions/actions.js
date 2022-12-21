import { ADD_TASK, DEL_TASK, IS_DONE_CHANGE_TASK } from "../Constants/actions-types";

export const addTask = task => {
    return {
        type: ADD_TASK,
        payload: task
    }
},
delTask = task => {
    return {
        type: DEL_TASK,
        payload: task
    }
},
isDoneChangeTask = task => {
    return {
        type: IS_DONE_CHANGE_TASK,
        payload: task
    }
}
