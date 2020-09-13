import React from "react";
function ListItem(props) {
  return <li onClick={props.onClick}>{props.listItem}</li>;
}
export default ListItem;
