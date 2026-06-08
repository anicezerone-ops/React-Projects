import styles from "./footer.module.css";
export default function Footer({ todos, completedTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.footerText}>
        Completed Todos: {completedTodos};{" "}
      </span>
      <span className={styles.footerText}> Total Todos: {todos.length}; </span>
      <span className={styles.footerText}>
        Remaining Todos: {todos.length - completedTodos}
      </span>
      <p>
        {completedTodos} / {todos.length} completed
      </p>
    </div>
  );
}
