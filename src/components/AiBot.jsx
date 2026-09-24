import React, { useState } from "react";

const RULES = [
  [/hello|hi\b/i, "Hello! I'm the demo AiBot. Ask me about the starter."],
  [/matrix/i, "Matrix chat needs the matrix-js-sdk package — see Chat.jsx."],
  [/firebase|login/i, "Real login needs Firebase — see firebase.js for the config."],
];

export default function AiBot() {
  const [q, setQ] = useState("");
  const [log, setLog] = useState([]);

  const ask = () => {
    if (!q.trim()) return;
    const hit = RULES.find(([re]) => re.test(q));
    const a = hit ? hit[1] : "Demo bot: I only know a few starter topics (try 'matrix' or 'firebase').";
    setLog((l) => [...l, { q, a }]);
    setQ("");
  };

  return (
    <section style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16, margin: "16px 0" }}>
      <h3>AiBot <small style={{ color: "#888" }}>(rule-based demo)</small></h3>
      {log.map((t, i) => (
        <div key={i} style={{ margin: "8px 0" }}>
          <div><b>You:</b> {t.q}</div>
          <div><b>Bot:</b> {t.a}</div>
        </div>
      ))}
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Ask something"
             style={{ padding: 8, width: "70%" }} />
      <button onClick={ask} style={{ padding: 8, marginLeft: 8 }}>Ask</button>
    </section>
  );
}
