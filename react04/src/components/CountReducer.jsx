// import React, { useReducer } from "react";

// const initialState = 0;
// const reducer = (state, action) => {
//   switch ((action, type)) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     case "RESET":
//       return initialState;
//     default:
//       return state;
//   }
// };

// function CountReducer() {
//   const [count, dispatch] = useReducer(reducer, initialState); // reducer: 함수 initialState: 초기값

//   return (
//     <div>
//       <h1>숫자세기</h1>
//       <p>값 : {count}</p>
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>중가</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>감소</button>
//       <button onClick={() => dispatch({ type: "RESET" })}>리셋</button>
//     </div>
//   );
// }

// export default CountReducer;

import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

function CountReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  // reducer: 함수 initialState: 초기값,  사용이유 = 간단한 코드일 경우 useState를 사용하지만 코드가 복잡해질 땐 useReducer를 쓴다

  return (
    <div>
      <h1>숫자세기</h1>
      <p>값: {count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>감소</button>
      <button onClick={() => dispatch({ type: "RESET" })}>리셋</button>
    </div>
  );
}

export default CountReducer;
