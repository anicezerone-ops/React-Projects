import { useState } from 'react';
import styles from './form.module.css';
export default function Form({ todos, setTodos }) {
    // const [todo, setTodo] = useState("");
    const [todo, setTodo] = useState({"name": "",done: false});
    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({"name": "",done: false});
    };
    return (
        <div className={styles.todoform}>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <input className={styles.modernInput} type="text" placeholder='Enter todo items...' value={todo.name} onChange={(e) => setTodo({...todo, name: e.target.value, done: false})} />
                    <button className={styles.modernButton} type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}