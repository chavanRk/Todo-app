import React, { useState } from 'react';
import "./ToDo.css";

function TodoApp() {
    const [todoList, setTodoList] = useState([]);
    const [todoInput, setTodoInput] = useState('');

    const handleTodoInput = (e) => {
        setTodoInput(e.target.value);
    }

    const addTodo = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            setTodoList([...todoList, {
                id: Date.now(),
                name: todoInput,
                completed: false,
            }]);
            setTodoInput('');
        }
    }

    const markComplete = (id) => {
        setTodoList(
            todoList.map((todo) => {
                if (todo.id === id) {
                    todo.completed = true;
                }
                return todo;
            })
        );
    }

    const removeTodo = (id) => {
        setTodoList(
            todoList.filter((todo) => todo.id !== id)
        );
    }

    return (
        <div className="todo-app">
            <input
                type="text"
                placeholder="Add Todo"
                value={todoInput}
                onChange={handleTodoInput}
                onKeyPress={addTodo}
            />
            <button onClick={addTodo}>Add Item</button>
            <ul className="todo-list">
                {todoList.map((todo) => (
                    <li
                        key={todo.id}
                        className={`todo-item ${todo.completed ? 'completed' : ''}`}
                    >
                        <span onClick={() => markComplete(todo.id)}>{todo.name}</span>
                        <button onClick={() => removeTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
