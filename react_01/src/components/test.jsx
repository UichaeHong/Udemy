import React, { useEffect, useState } from "react";

function Add() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count}`;
  });
  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
}

export default Add;
