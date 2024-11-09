import React, {useState} from "react";
import {addTodo} from "../actions/todoActions";
import {useDispatch} from "react-redux";


const AddTodo = () => {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        dispatch(addTodo(text));
        setText('');
    };

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    );
}

export default AddTodo;