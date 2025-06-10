import React, { useEffect, useState } from "react";
import { createMatrixClient } from "../utils/matrixClient";

export default function Chat({ userId, token }) {
  const [client, setClient] = useState(null);
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    const c = createMatrixClient(token, userId);
    c.startClient();
    c.on("Room.timeline", (ev, room, toStart) => {
      if (ev.getType() === "m.room.message") {
        setMsgs(prev => [...prev, ev.getContent().body]);
      }
    });
    setClient(c);
  }, [token, userId]);

  const sendMsg = () => {
    client.sendTextMessage("!roomId:localhost", "Hello from React");
  };

  return (
    <div>
      <button onClick={sendMsg}>Send Hello</button>
      {msgs.map((m, i) => <p key={i}>{m}</p>)}
    </div>
  );
}