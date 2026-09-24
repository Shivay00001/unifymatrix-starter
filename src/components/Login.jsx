import React, { useState } from "react";

/**
 * Demo login (no backend wired). The repo's firebase.js holds a real Firebase
 * config — `npm i firebase` and swap this for signInWithEmailAndPassword to go live.
 */
export default function Login({ onUser }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    onUser({ email, uid: `demo-${Date.now()}`, accessToken: null });
  };

  return (
    <form onSubmit={submit} style={{ maxWidth: 320, margin: "4rem auto" }}>
      <h2>UnifyMatrix — Sign in</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
             style={{ display: "block", width: "100%", margin: "8px 0", padding: 8 }} />
      <input placeholder="Password" type="password" value={pass} onChange={(e) => setPass(e.target.value)}
             style={{ display: "block", width: "100%", margin: "8px 0", padding: 8 }} />
      <button type="submit" style={{ padding: "8px 24px" }}>Login (demo)</button>
      <p style={{ fontSize: 12, color: "#666" }}>Demo auth — wire Firebase (see firebase.js) for real login.</p>
    </form>
  );
}
