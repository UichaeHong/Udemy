import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      console.log("리턴되었습니다"); // 다시 시작할 때 = 새로고침
      clearInterval(timer);
    };
  }, []); // 타이머가 마운트 될 때 한번 실행함

  return (
    <>
      <div>
        <p> {seconds}초</p>
      </div>
    </>
  );
}

export default Timer;
