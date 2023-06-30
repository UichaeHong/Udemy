// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";

// const socket = io("http://localhost:3001");

// function Chat() {
//   const [username, setUsername] = useState("");
//   const [message, setMessage] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   useEffect(()=> {
//     socket.on("message", handleMessage)
//     return()=> {
//         socket.off("message", handleMessage)
//     }
//   })

//   const handleMessage =(message) => {
//     setMessage((prev)=> [...prev])
//   }
//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handleMessageSubmit = () => {
//     if(inputValue.trim() !== ""){
//         const currentTime = new Date().toLocaleDateString()
//         socket.emit("message", {
//             username,
//             username,
//             content: inputValue,
//             time: currentTime,
//           });
//           setInputValue("");
//         // })
//     }
//   };
//   return (
//     <div>
//       <h1>실시간 채팅</h1>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="사용자 이름을 입력하세요"
//       />
//       <h1>채팅</h1>
//       <div>{message.map((message, index)=> (
//         <p key={index}>
//             {message.name} : {message.content} - {message.}
//         </p>
//       ))}</div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       ></input>
//       <button onClick={handleMessageSubmit}>전송</button>
//     </div>
//   );
// }

// export default Chat;

import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001"); // 서버의 URL에 맞게 변경

function Chat() {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    socket.on("message", handleMessage);
    return () => {
      socket.off("message", handleMessage);
    };
  }, []);

  const handleMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleMessageSend = () => {
    if (inputValue.trim() !== "") {
      const currentTime = new Date().toLocaleTimeString();
      socket.emit("message", {
        username,
        content: inputValue,
        time: currentTime,
      });
      setInputValue("");
    }
  };

  const enterKey = (e) => {
    if (e.key === "Enter") {
      handleMessageSend();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={handleUsernameChange}
        placeholder="사용자 이름"
      />

      <h2>채팅</h2>
      <div>
        {messages.map((message, index) => (
          <p key={index} style={{ color: message.color }}>
            {message.username}: {message.content} - {message.time}
          </p>
        ))}
      </div>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={enterKey}
      />
      <button onClick={handleMessageSend}>전송</button>
    </div>
  );
}

export default Chat;
