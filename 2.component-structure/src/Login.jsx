import React from "react";

export const users = [
  {
    username: "Saadet",
    password: "1345",
  },

  {
    username: "Lale",
    password: "1245",
  },
];

function Login() {
  //Fragment
  return (
    <>
      <div>
        <p>Username:</p>
        <input type="text" />
      </div>

      <div>
        <p>Password:</p>
        <input type="text" />
      </div>

      <button>Log in</button>
    </>
  );
}

export default Login;
