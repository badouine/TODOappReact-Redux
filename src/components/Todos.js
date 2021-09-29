import React, { useState } from "react"; 
import { connect } from "react-redux";


const Todos = (props) => {
    const [todo, setTodo] = useState("");
   
    const handleChange = (e) => {
        setTodo(e.target.value);
    };
        console.log('props from store',props,todo);

    return (
        <div className="addTodos">
            <input
                type ="text"
                onChange = { (e) => handleChange(e)}
                className="todo-input"
            />
            <button className="add-btn"
            onClick={() =>
            props.addTodos({
                id: Math.floor(Math.random() *1000),
                item: todo,
                completed: false,
            })
            }> Add </button>
            <br/>
             
        </div>
    )
};

export default connect()(Todos);