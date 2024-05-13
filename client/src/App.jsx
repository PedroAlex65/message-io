import Join from "./components/Join/Join.jsx";
import Chat from "./components/Chat/Chat.jsx";
import { useState } from "react";

function App() {
  const [chatVisibiliby, setChatVisibiliby] = useState(false);
const [socket, setSocket]= useState(null)
  return <div className="app">
    {chatVisibiliby ? <Chat socket={socket} /> : <Join setSocket={setSocket} setChatVisibiliby={setChatVisibiliby} />}
    </div>;
}

export default App;
