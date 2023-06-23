import React from "react";

function Practice03() {
  return (
    <>
      <Greeting name="홍의채" />
    </>
  );
}
function Greeting({ name }) {
  return <h1>안녕하세요, {name}</h1>;
}

export default Practice03;
