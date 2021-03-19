import { EDIT_TASK, REMOVE_TASK } from "../actions/types";
import { CREATE_TASK } from "../actions/types";


const initialState = [
    // {
    //     id: 1,
    //     title: "Redux",
    //     description: "Redux is state management tool",
    //     status: "In Progress",
    // },
    // {
    //     id: 2,
    //     title: "React",
    //     description: "React is library not a framework",
    //     status: "In Progress",
    // },
];

const tasks = (state = { tasks: initialState }, action) => {
    // if-else version
    // if (action.type === EDIT_TASK) {
    //     const { payload } = action;
    //     return {
    //         tasks: state.tasks.map(task => {
    //             if (task.id === payload.id) {
    //                 return Object.assign({}, task, payload.params)
    //             }
    //             return task;
    //         })
    //     }
    // }
    // switch version

    const { payload } = action;
    switch (action.type) {
        case EDIT_TASK: {
            return {
                tasks: state.tasks.map(task => {
                    if (task.id === payload.id) {
                        return Object.assign({}, task, payload.params)
                    }
                    return task;
                }),
            };
        }
        case CREATE_TASK:{
            return {
                tasks: state.tasks.concat(action.payload)
            }
        }
        case REMOVE_TASK:{
            return {
                tasks :state.tasks.filter(task=> task.id !== action.id)
            }
        }


        default: return state;
    }
};

export default tasks;