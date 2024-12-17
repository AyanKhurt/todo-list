import { useState } from "react";
import './App.css';

const App = () => {
  const [lists, setLists] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    if (inputVal.trim() === "") {
      return;
    }
    setLists((prev) => [...prev, inputVal]);
    setInputVal("");
  };

  const removeItem = (index) => {
    let newArr = [...lists];
    newArr.splice(index, 1);
    setLists(newArr);
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <form onSubmit={addItem}>
          <input 
            type="text" 
            value={inputVal} 
            onChange={(event) => {setInputVal(event.target.value);}} 
            className="input-field"
            placeholder="Enter item..."
          />
          <button type="submit" className="add-button">Add Item</button>
        </form>

        <div className="list-container">
          {lists.map((ele, i) => {
            return (
              <div key={i} className="list-item">
                <p className="item-text">{ele}</p>
                <button onClick={() => removeItem(i)} className="delete-button">Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;