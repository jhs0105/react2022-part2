import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import axios from "axios";

function TodoMain(props) {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    async function loadTodoList() {
      const initList = await axios.get("https://port-0-todo-app-server-fao2flc5zdwug.gksl2.cloudtype.app/todo/list");
      setTodoList(initList.data);
    }
    loadTodoList();
  }, []);

  const insertTodoItem = function (todoTxt) {
    axios
      .post("https://port-0-todo-app-server-fao2flc5zdwug.gksl2.cloudtype.app/todo/insert", { done: false, title: todoTxt })
      .then((response) => {
        axios.get("https://port-0-todo-app-server-fao2flc5zdwug.gksl2.cloudtype.app/todo/list").then((response) => {
          setTodoList(response.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTodoItem = (id) => {
    axios.delete(`https://port-0-todo-app-server-fao2flc5zdwug.gksl2.cloudtype.app/todo/delete/${id}`).then((response) => {
      axios.get("https://port-0-todo-app-server-fao2flc5zdwug.gksl2.cloudtype.app/todo/list").then((response) => {
        setTodoList(response.data);
      });
    });
  };

  const modifyTodoItem = async (id, done) => {
    await axios.put(`https://port-0-todo-app-server-fao2flc5zdwug.gksl2.cloudtype.app/todo/modify/${id}`, { done: !done });
    const todoList = await axios.get("https://port-0-todo-app-server-fao2flc5zdwug.gksl2.cloudtype.app/todo/list");
    setTodoList(todoList.data);
  };

  const changeItem = (id, localTitle) => {
    axios.put(`https://port-0-todo-app-server-fao2flc5zdwug.gksl2.cloudtype.app/todo/change/${id}`, { title: localTitle }).then((response) => {
      axios.get("https://port-0-todo-app-server-fao2flc5zdwug.gksl2.cloudtype.app/todo/list").then((response) => {
        setTodoList(response.data);
        console.log(response.data);
      });
    });
  };

  return (
    <>
      <Header />
      <TodoInsert insertTodoItem={insertTodoItem} />
      <TodoList todoList={todoList} deleteTodoItem={deleteTodoItem} modifyTodoItem={modifyTodoItem} changeItem={changeItem} />
      <Footer />
    </>
  );
}

export default TodoMain;
