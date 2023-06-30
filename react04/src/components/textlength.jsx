import React, { useState, useEffect } from "react";

function Length() {
  const [Text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const inputValue = (event) => {
    const value = event.target.value;
    setText(value);
  };

  // ver. 1
  const inputLength = Text.length;

  // ver. 2 useEffect
  useEffect(() => {
    setCharCount(Text.length);
  }, [Text]);

  return (
    <>
      <div>
        <input type="textarea" value={Text} onChange={inputValue}></input>
        <p>{inputLength}</p>
        <p>{charCount}</p>
      </div>
    </>
  );
}

export default Length;
