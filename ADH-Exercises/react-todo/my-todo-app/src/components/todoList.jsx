import React from "react";
import faker from "faker";
import TodoItem from "./todoItem";

export default function TodoList() {
  let contacts = [];
  for (let i = 1; i < 21; i++) {
    contacts.push(<TodoItem key={i} item={faker.name.findName()} number={i} />);
  }

  return (
    <div className="App">
      <ul>{contacts}</ul>
    </div>
  );
}
