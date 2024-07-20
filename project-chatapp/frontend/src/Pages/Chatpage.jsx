import axios from "axios";
import { useEffect } from "react";

function Chatpage() {
  const fetchChats = async () => {
    const data = await axios.get("/api/chat");
    console.log(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);
  return <div>Chatpage</div>;
}

export default Chatpage;
