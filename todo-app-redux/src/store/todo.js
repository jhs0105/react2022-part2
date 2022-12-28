export const initState = {
  count: 0,
  todoList: [],
};

export const ACTIONS_TYPE = {
  INSERT_TODO: "insertTodo",
  DELETE_TODO: "deleteTodo",
  CHANGE_TODO: "changeTodo",
  MODIFY_TODO: "modifyTodo",
};

export const insertTodo = (todoitem) => {
  return {
    type: ACTIONS_TYPE.INSERT_TODO,
    payload: todoitem,
  };
};

export const deleteTodo = (id) => {
  return {
    type: ACTIONS_TYPE.DELETE_TODO,
    payload: id,
  };
};

export const changeTodo = (id, localContents) => {
  return {
    type: ACTIONS_TYPE.CHANGE_TODO,
    payload: { id, localContents },
  };
};

export const modifyTodo = (id) => {
  return {
    type: ACTIONS_TYPE.MODIFY_TODO,
    payload: { id },
  };
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS_TYPE.INSERT_TODO: {
      const newTodoList = [action.payload, ...state.todoList];
      return {
        count: state.count + 1,
        todoList: newTodoList,
      };
    }
    case ACTIONS_TYPE.DELETE_TODO: {
      const id = action.payload;
      const deleteTodoList = state.todoList.filter((item, idx) => item.id !== id);
      return {
        count: state.count - 1,
        todoList: deleteTodoList,
      };
    }
    case ACTIONS_TYPE.CHANGE_TODO: {
      const { id, localContents } = action.payload;
      return {
        count: state.count,
        todoList: state.todoList.map((item, idx) => (item.id === id ? { ...item, title: localContents } : item)),
      };
    }
    case ACTIONS_TYPE.MODIFY_TODO: {
      const { id } = action.payload;
      return {
        count: state.count,
        todoList: state.todoList.map((item, idx) => {
          if (item.id === id) {
            item.done = !item.done;
          }
          return item;
        }),
      };
    }

    default:
      return state;
  }
};

export default reducer;
