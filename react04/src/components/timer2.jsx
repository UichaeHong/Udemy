// import React, { useState, useEffect } from "react";

// function Timer2() {
//   const [timer, setTimer] = useState(0);
//   const [test2, setTest2] = useState(true);

//   useEffect(() => {
//     const test = setInterval(() => {
//       setTimer((prev) => prev + 1);
//     }, 1000);
//     return () => clearInterval(test);
//   });

//   const Btn = () => {
//     setTest2(test2);
//   };

//   return (
//     <>
//       <div>
//         <p>{Btn === true ? <p></p> : <p>{timer}</p>}</p>
//         <button onClick={Btn}>버튼</button>
//       </div>
//     </>
//   );
// }

// export default Timer2;
import React, { useEffect, useState } from "react";

function Timer2() {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const test = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(test);
  });

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
    setCount(0);
  };

  return (
    <div>
      <h1>timer2</h1>
      {isVisible && <p>{count}</p>}
      <button onClick={handleButtonClick}>
        {isVisible ? "Hide Text" : "Show Text"}
      </button>
    </div>
  );
}

export default Timer2;
