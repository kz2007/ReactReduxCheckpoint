import { ADD_TASK, DEL_TASK, IS_DONE_CHANGE_TASK } from "../Constants/actions-types";

const initialState = {
    tasks: [{id: 0, description: "This is a task", isDone: false},
    {id: 1, description: "This is a task", isDone: true},
    {id: 2, description: "This is a task", isDone: true},
    {id: 3, description: "This is a task", isDone: false}]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            let NTasks = [...state.tasks, action.payload]
            console.log(NTasks);
            return {
                tasks: NTasks
            }
        case DEL_TASK:
            delete state.tasks[action.payload.id];
            console.log(state.tasks);
            return {
                tasks: state.tasks
            }
        case IS_DONE_CHANGE_TASK:
                state.tasks[action.payload.id].isDone = !state.tasks[action.payload.id].isDone;
                console.log(state.tasks);
            return {tasks: state.tasks};
        
        default:
            return state
    }
}

export default rootReducer