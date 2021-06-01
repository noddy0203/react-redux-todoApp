import React, { useState } from "react";
import "./todo.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem , removeItem } from "../actions/action";

const Todo = () => {
  const [state, setstate] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducer.list);

  return (
    <>
      <div className="main_div">
        <div className="child-div">
          <figure>
            <figcaption style={{textTransform:"capitalize"}}>add your list here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              value={state}
              onChange={(event) => setstate(event.target.value)}
              className="text"
              placeholder="add your text here..."
            />
            <i
              className="fas fa-plus text-icon"
              style={{transform:"translateY(8px)"}}
              title="add-itme"
              onClick={() => dispatch(addItem(state), setstate(""))}
            ></i>
          </div>

          <div className="showItem">
            <ol className="eachItem">
              {list.map((element) => {
                return (
                  <li key={element.id}>
                    <h4>{element.data}</h4>
                    <i
                      className="fas fa-trash item-icon"
                      title="remove-item"
                      onClick={() => dispatch(removeItem(element.id))}
                    ></i>
                  </li>
                );
              })}
            </ol>
            <div>
              <button onClick={()=>dispatch(deleteItem())}><span style={{marginRight:"10px"}}>Clear </span><i className="fas fa-trash"></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
