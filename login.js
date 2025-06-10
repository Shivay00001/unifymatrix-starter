import React, { useState } from "react";
import { login, signup } from "../utils/api";

export default function Login({ onUser }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSignup = async () => {
    const user = await signup(email, pass);
    onUser(user.user);
  };

  const handleLogin = async () => {
    const user = await login(email, pass);
    onUser(user.user);
  };

  return (
    <div>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPass(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}