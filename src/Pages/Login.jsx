import React, { useEffect, useState, useRef } from "react";

import { useHistory } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");

  const [password, setPassword] = useState("");

  useEffect(() => {
    setUserName("ok");
    setPassword("ok");
    console.log(userName);
    console.log(password);
  });
  const [currentid, setCurrentid] = useState("");
  const [currentPwd, setCurrentPwd] = useState("");
  const [query, setQuery] = useState("");

  const checkUserName = (id) => {
    if (id == userName) {
      console.log("true id");
      return true;
    } else {
      console.log("false id");
      return false;
    }
  };

  const checkPassword = (pw) => {
    if (pw == password) {
      console.log("true pw");
      return true;
    } else {
      console.log("false pw");
      return false;
    }
  };

  let history = useHistory();

  const passLoging = (bool) => {
    if (bool) {
      history.push("/Profile");
    } else {
      history.push("/failedLogin");
    }
  };

  return (
    <div>
      <input
        placeholder="user name"
        value={currentid}
        onChange={(e) => setCurrentid(e.target.value)}
        type="text"
      ></input>

      <input
        id="pwinput"
        type="text"
        placeholder="password"
        value={currentPwd}
        onChange={(e) => setCurrentPwd(e.target.value)}
        type="text"
      />
      {/* <button
        onClick={() => {
          history.push("/profile");
        }}
      >
        Login
      </button> */}
      <button
        onClick={() => {
          console.log(currentid);
          const test1 = checkUserName(currentid);
          const test2 = checkPassword(currentPwd);
          console.log(test1);
          console.log(test2);
          if (test1 && test2) {
            passLoging(true);
          } else {
            passLoging(false);
          }
          //
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
