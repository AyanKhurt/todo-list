import { useState } from "react";

const App = () => {
  const [lists, setLists] = useState([]); // State for the list
  const [inputVal, setInputVal] = useState(""); // State for input value

  const addItem = (e) => {
    e.preventDefault();
    setLists((prev) => [...prev, inputVal]); // Use inputVal instead of input
    setInputVal(""); // Clear the input field
  };

  const removeItem = (index) => {
    let newArr = [...lists];
    newArr.splice(index, 1); // Remove the item at the specified index
    setLists(newArr); // Update the state with the new list
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",}}>
        <form style={{ paddingBottom: 20 }} onSubmit={addItem}>
          <input type="text" value={inputVal} onChange={(event) => {setInputVal(event.target.value);}}/>
          <button type="submit">Add Item</button>
        </form>

        <div style={{ display: "flex", flexDirection: "column", rowGap: 12 }}>
          {lists.map((ele, i) => {
            return (
              <div key={i} style={{ border: "2px solid #EEE",borderRadius: 8,padding: 15,width: 350,}}>
                <p style={{ margin: 0 }}>{ele}</p>
                <button onClick={() => removeItem(i)}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
