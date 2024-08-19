import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoName, todoDate, onDeleteClick }) {

  const contextObj = useContext(TodoItemsContext);
  const deleteItem = contextObj.deleteItem;
    return (
      <div className="container">
        <div className="row kg-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger kg-button"
              onClick={() => deleteItem(todoName)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default TodoItem;
  