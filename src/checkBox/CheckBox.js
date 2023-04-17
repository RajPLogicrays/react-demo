import React, { useState } from "react";

function CheckBox(props) {
  const [items, setItems] = useState([
    { id: 1, city: "New York", checked: false },
    { id: 2, city: "Los Angeles", checked: false },
    { id: 3, city: "Chicago", checked: false },
    { id: 4, city: "Houston", checked: false },
    { id: 5, city: "Phoenix", checked: false },
    { id: 6, city: "Philadelphia", checked: false },
    { id: 7, city: "San Antonio", checked: false },
    { id: 8, city: "San Diego", checked: false },
    { id: 9, city: "Dallas", checked: false },
    { id: 10, city: "San Jose", checked: false },
  ]);

  const [showDelete, setShowDelete] = useState(false);

  const handleDelete = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  const handleCheck = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setShowDelete((prevState) => ({ ...prevState, [id]: !prevState[id] }));
    console.log(updatedItems)

  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            defaultChecked={item.checked || false}
            onChange={() => handleCheck(item.id)}
          />
          <label>{item.city}</label>
          {showDelete[item.id] &&(
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default CheckBox;
