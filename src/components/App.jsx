import { useState } from "react";
import ListItem from "./ListItem";

export default function App() {
  //states
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");

  function manageInput(event) {
    //retrieve user input
    const newItem = event.target.value;
    //set state
    setItem(newItem);
  }

  function addItem() {
    setItems((prevalue) => {
      //update items array
      return [...prevalue, item];
    });
    //clear input text
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={manageInput} value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(function (item) {
            return <ListItem itemName={item} />;
          })}
        </ul>
      </div>
    </div>
  );
}
