import React, { useEffect, useState } from "react";
import { createMatrixClient } from "../utils/matrixClient";

export default function Chat({ userId, token }) {
  const [client, setClient] = useState(null);
  const [msgs, setMsgs] = useState([]);
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState("connecting…");

  useEffect(() => {
    let cancelled = false;
    createMatrixClient(token, userId).then((c) => {
      if (cancelled) return;
      if (!c) {
        setStatus("Matrix SDK not installed — chat is disabled (npm i matrix-js-sdk to enable).");
        return;
      }
      setClient(c);
      setStatus("connected");
      c.startClient();
      c.on("Room.timeline", (ev) => {
        if (ev.getType() === "m.room.message") {
          setMsgs((prev) => [...prev, ev.getContent().body]);
        }
      });
    });
    return () => { cancelled = true; };
  }, [token, userId]);

  const sendMsg = () => {
    if (!client || !draft.trim()) return;
    client.sendTextMessage("!roomId:localhost", draft);
    setMsgs((prev) => [...prev, `you: ${draft}`]);
    setDraft("");
  };

  return (
    <section style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16, margin: "16px 0" }}>
      <h3>Chat <small style={{ color: "#888" }}>({status})</small></h3>
      <div>{msgs.map((m, i) => <p key={i}>{m}</p>)}</div>
      <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Type a message"
             disabled={!client} style={{ padding: 8, width: "70%" }} />
      <button onClick={sendMsg} disabled={!client} style={{ padding: 8, marginLeft: 8 }}>Send</button>
    </section>
  );
}
