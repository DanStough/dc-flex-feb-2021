import React from "react";
let itemName = [];

export default function TodoItem({ item, number }) {
  return (
    <li>
      {number}. {item}
    </li>
  );
}
