export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

// Создание задачи
export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: { text },
});

// Изменение статуса задачи (выполнена/не выполнена)
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id },
});

export const fetchTodos = () => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_TODOS_REQUEST' });

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();

            dispatch({
                type: 'FETCH_TODOS_SUCCESS',
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: 'FETCH_TODOS_FAILURE',
                payload: error.message,
            });
        }
    };
};

export const myAction = () => ({
    type: 'MY_ACTION',
});