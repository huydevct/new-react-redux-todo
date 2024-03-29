import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo, getTodos, markCompleted, todosSelector } from "../store/reducers/todosSlice";
import TodoForm from "./TodoForm";

const Todos = () => {
  const todos = useSelector(todosSelector);

  const dispatch = useDispatch()

  const toggleTodoCompleted = (todoId) => {
    // console.log(todoId);
    dispatch(markCompleted(todoId));
  };

  const deleteSingleTodo = todoId => {
    dispatch(deleteTodo(todoId))
  }

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])
 
  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            {todo.title}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={toggleTodoCompleted.bind(this, todo.id)}
            />
            <button onClick={deleteSingleTodo.bind(this, todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
