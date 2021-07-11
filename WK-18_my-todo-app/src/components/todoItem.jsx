import React from "react";

export default function TodoItem({ item, number }) {
  return (
    <li>
      {number}.{item}
    </li>
  );
}
