import React,{useState} from "react";
import ListItem from "./listitems"
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
    editListOfItems(prevValue=>{
      return prevValue.filter((item,index)=>{ return index!==id;})
    })
  }
  function makeList(item,index){
    return <ListItem id={index} onClick={()=>deleteItem(index)} listItem={item}/>
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
    <ul>
    {listOfItems.map(function (currentelement, index) {
      return makeList(currentelement,index)
      }
    )
    }
    </ul>
    </div>
  );
}

export default App;
