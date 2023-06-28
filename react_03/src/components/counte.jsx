import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>카운트: {count}</div>
      <button onClick={onClick}>+1</button>
    </>
  );
}

export default Counter;
