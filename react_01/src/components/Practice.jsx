// import React, { useState } from "react";

// function Id() {
//   const [id, setId] = useState();
//   const [pw, setPw] = useState();

//   const Btn = () => {
//     if (id === "admin" || pw === "password") {
//       alert("로그인 성공");
//       console.log(id.value);
//     } else {
//       alert("로그인 실패");
//       console.log(pw);
//     }
//   };

//   //   console.log(id);

//   return (
//     <>
//       {/* <form> */}
//       <input
//         type="text"
//         // value={id}
//         onChange={(e) => {
//           setId(e.target.value);
//         }}
//       ></input>
//       <input
//         type="password"
//         // value={pw}
//         onChange={(e) => {
//           setId(e.target.value);
//         }}
//       ></input>

//       <button onClick={Btn}>로그인</button>

//       {/* </form> */}
//     </>
//   );
// }

// export default Id;

// ======================================================

// import React, { useState } from "react";

// function Login() {
//   const [id, setId] = useState("");
//   const [pw, setPw] = useState("");

//   const onclickId = (event) => {
//     setId(event.target.value);
//     console.log(event.target.value);
//   };
//   console.log(id);

//   const onClickPw = (event) => {
//     setPw(event.target.value);
//     console.log(event.target.value);
//   };

//   const onSubmit = () => {
//     // event.preventDefault();
//     if (id === "submit" && pw === "password") {
//       alert("로그인 성공");
//     } else {
//       alert("로그인 실패");
//     }
//   };
//   return (
//     <>
//       <form onSubmit={onSubmit}>
//         <input type="text" value={id} onChange={onclickId}></input>
//         <input type="text" value={pw} onChange={onClickPw}></input>

//         <button type="submit">로그인</button>
//         {id === "submit" && pw === "password" ? (
//           <div>로그인 성공</div>
//         ) : (
//           <div>로그인 실패</div>
//         )}
//       </form>
//     </>
//   );
// }

// export default Login;

import React, { useState } from "react";

// function TodoList() {
//   const [text, setText] = useState("");

//   const [test, setTest] = useState([{ id: "1", pw: "a" }]);

//   const Add = () => {
//     let Alpa = test.concat({ id: test.length + 1, pw: test });
//     setTest(Alpa);
//     setText("");
//   };

//   return (
//     <>
//       <div>
//         <input
//           value={text}
//           onChange={(e) => {
//             setText(e.target.value);
//           }}
//         ></input>
//         <button onClick={Add}>Add</button>
//       </div>
//       <div>
//         {test.map((value) => {
//           return <li key={value.id}>{value.pw}</li>;
//         })}
//       </div>
//     </>
//   );
// }
// export default TodoList;

function TodoList() {
  const [text, setText] = useState("");
  const [add, setAdd] = useState([]);

  const Add = () => {
    setAdd((prev) => [...prev, text]);
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      ></input>
      <button onClick={Add}>추가하기</button>
      {add.length > 0 &&
        add.map((value) => {
          return <li>{value}</li>;
        })}
    </>
  );
}
export default TodoList;
