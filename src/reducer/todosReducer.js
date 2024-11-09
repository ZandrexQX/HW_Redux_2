import {ADD_TODO, TOGGLE_TODO} from "../actions/todoActions";
import {combineReducers} from "@reduxjs/toolkit";

const initialState = [];


//Редьюсер для обработки действий с задачами
const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            //Добавляем новую задачу
            return [...state, {id: Date.now(), text: action.payload.text, completed: false}];
        case TOGGLE_TODO:
            //Изменяем статус выполнения задачи
            return state.map(todo =>
                todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo
            );
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    todos: todosReducer,
    // здесь можно добавить другие редюсеры
});

export default rootReducer;