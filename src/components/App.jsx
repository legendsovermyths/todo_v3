import React,{useState} from "react";

function App() {
  let [listOfItems,editListOfItems]=useState(["An Item"])
  var item;
  function handelChange(events){
    item=events.target.value;
  }
  function handelClick(){
       editListOfItems(
         [...listOfItems,item]
      )
  }
  function makeList(item){
    return <li>{item}</li>
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handelChange} type="text" />
        <button onClick={handelClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listOfItems.map(makeList)}
        </ul>
      </div>
    </div>
  );
}

export default App;
