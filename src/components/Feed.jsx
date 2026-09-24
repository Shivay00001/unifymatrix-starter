import React, { useState } from "react";

export default function Feed() {
  const [posts, setPosts] = useState([
    { id: 1, author: "system", text: "Welcome to the UnifyMatrix feed." },
  ]);
  const [draft, setDraft] = useState("");

  const publish = () => {
    if (!draft.trim()) return;
    setPosts((p) => [{ id: Date.now(), author: "you", text: draft }, ...p]);
    setDraft("");
  };

  return (
    <section style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16, margin: "16px 0" }}>
      <h3>Feed</h3>
      <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Share an update"
             style={{ padding: 8, width: "70%" }} />
      <button onClick={publish} style={{ padding: 8, marginLeft: 8 }}>Post</button>
      <ul>
        {posts.map((p) => <li key={p.id}><b>{p.author}:</b> {p.text}</li>)}
      </ul>
    </section>
  );
}
