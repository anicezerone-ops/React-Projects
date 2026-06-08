import TodoItem from './TodoItem';
import styles from './todolist.module.css';
export default function TodoList({ todos, setTodos }) {
    // const sortedTodos = [...todos].sort((a, b) => {
    //     if (a.done === b.done) {
    //         return 0;
    //     }
    //     return a.done ? 1 : -1;
    // });
    const sortedTodos = todos.slice().sort((a, b) => Number(a.done) - Number(b.done));
    return (
        <div className={styles.todolist}>
            {sortedTodos.map((item, index) => (
                <TodoItem key={index} item={item} todos={sortedTodos} setTodos={setTodos} />
            ))}
        </div>
    )
}