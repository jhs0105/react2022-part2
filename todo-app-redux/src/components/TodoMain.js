import Header from "./Header";
import Footer from "./Footer";
import TodoInsert, { test, num } from "./TodoInsert";
import TodoList from "./TodoList";
import { useSelector } from "react-redux";

function TodoMain() {
  const todoList = useSelector((state) => {
    return state.todoList;
  });

  return (
    <>
      <Header />
      <TodoInsert />
      <TodoList todoList={todoList} />
      <Footer />
    </>
  );
}

export default TodoMain;
