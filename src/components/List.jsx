import React from "react";

function List(props) {
  return (
    <div>
      <ul>
        {props.itemList.map((todoItems) => {
          return <li>{todoItems}</li>;
        })}
      </ul>
    </div>
  );
}

export default List;
