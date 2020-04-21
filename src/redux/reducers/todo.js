const init_state = {
    todoInput: "Hello World!",
    todoList: [],
  };
  
  export default (state = init_state, action) => {
    if (action.type === "ON_CLICK") {
      return { ...state, todoList: [...state.todoList, action.payload] };
    }
    else if (action.type == "ON_CHANGE") {
        return{...state, todoInput: action.payload}
    }
    return { ...state };
  };