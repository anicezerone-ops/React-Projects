import Header from './components/Header.jsx';
import Todo from './components/Todo.jsx';
import './App.css';
import Form from './components/Form.jsx';
// import TodoItem from './components/TodoItem.jsx';
// import InlineComponent from './components/InlineComponent.jsx';
// import OutlineComponent from './components/OutlineComponent.jsx';
function App() {
  return (
    <div className="App">
      {/* TODO APP */}
      {/* <InlineComponent> */}
        <Header />
        {/* <Form /> */}
        <Todo />
        {/* <FormTodo /> */}
      {/* </InlineComponent> */}
      {/* <OutlineComponent /> */}
    </div>
  )
}

export default App
