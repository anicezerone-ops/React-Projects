import styles from './todoitem.module.css';

export default function TodoItem({ item, todos, setTodos }) {
    function deleteItem(name) {
        //const todo = document.querySelector(`.${styles.todoItemName}`);
        const updatedTodos = todos.filter((todo) => todo.name !== name);
        setTodos(updatedTodos);
        // console.log(updatedTodos);  
        //todo.style.textDecoration = "line-through";
    }
    function handleClick(name) {
        const updatedTodos = todos.map((todo) => {
            if (todo.name === name) {
                return { ...todo, done: !todo.done };
            }
            return todo;
        });
        setTodos(updatedTodos);
    }
    return (
        <div className={styles.todoItem}>
            <div className={styles.todoItemName}>
                <span onClick={() => handleClick(item.name)} className={item.done ? styles.completed : ''}>
                    {item.name}
                </span>
                <span>
                    <button onClick={() => deleteItem(item.name)} className={styles.deleteButton}>x</button>
                </span>
            </div>
            <hr className={styles.hrLine} />
        </div>
    )
}