import React,{useState} from "react";
import ListItems from "./listitems"
import Input from "./input"

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
  function deleteItem(id){
    console.log("item was selected"+id);
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
        <Input handelChange={handelChange}/>
        <button onClick={handelClick}>
          <span>Add</span>
        </button>
      </div>
      <ListItems listOfItems={listOfItems} makeList={makeList}/>
    </div>
  );
}

export default App;
