import React from "react";

function Practice04() {
  const todos = [
    { id: 1, text: "할 일 목록1" },
    { id: 2, text: "할 일 목록2" },
    { id: 3, text: "할 일 목록3" },
    { id: 4, text: "할 일 목록4" },
  ];
  return (
    <>
      <TodoList todos={todos} />
    </>
  );
}

function TodoList(props) {
  //   console.log(props);
  const todos = props.todos;
  return (
    <ul>
      {todos.map((item) => (
        <li>{item.text}</li>
      ))}
    </ul>
  );
}

// const Toggle = () => {
//   const [isOn, setOn] = useState(false);

//   const handleClick = () => {
//     setOn(!isOn);
//   };
//   return (
//     <>
//       <button onClick={handleClick}>{isOn ? "켜짐" : "꺼짐"}</button>
//     </>
//   );
// };

export default Practice04;
