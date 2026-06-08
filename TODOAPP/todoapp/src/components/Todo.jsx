import { useState } from 'react';

import Form from './Form.jsx';
import TodoList from './TodoList.jsx';
import Footer from './Footer.jsx';
export default function Todo() {
  
const [todos, setTodos] = useState([]);  
  const completedTodos = todos.filter((todo) => todo.done).length;  
return (
        <div>
            <Form todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos}  />
            <Footer todos={todos} completedTodos={completedTodos} />
        </div>
    )
}