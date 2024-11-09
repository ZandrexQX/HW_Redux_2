import {useDispatch, useSelector} from "react-redux";
import React, {useContext, useEffect} from "react";
import withFilter from "../contexts/withFilter";
import {fetchTodos, toggleTodo} from "../actions/todoActions";
import {FilterContext} from "../contexts/FilterContext";


const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();
    const {filter} = useContext(FilterContext);

    const filteredTodos = withFilter(todos, filter);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const handleFetchTodos = () => {
        dispatch(fetchTodos());
    };

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    };

    return (
        <div>
            <ul>
                {filteredTodos.map((todo) => (
                    <li
                        key={todo.id}
                        onClick={() => handleToggleTodo(todo.id)}
                        style={{textDecoration: todo.completed ? "line-through" : "none"}}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
            <button onClick={handleFetchTodos}>Fetch todos</button>
        </div>
    );
};

export default TodoList;