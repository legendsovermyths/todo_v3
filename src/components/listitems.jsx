import React from "react"
function ListItems(props){
  return <div>
    <ul>
      {props.listOfItems.map(props.makeList)}
    </ul>
  </div>
}
export default ListItems
