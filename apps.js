import React, { useState } from "react";
import Login from "./components/Login";
import Chat from "./components/Chat";
import Feed from "./components/Feed";
import Payments from "./components/Payments";
import AiBot from "./components/AiBot";

function App() {
  const [user, setUser] = useState(null);

  if (!user) return <Login onUser={u => setUser(u)} />;

  return (
    <div>
      <h1>Welcome {user.email}</h1>
      <Chat userId={user.uid} token={user.accessToken} />
      <Feed />
      <Payments />
      <AiBot />
    </div>
  );
}

export default App;