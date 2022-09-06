import React, { useEffect } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@mui/material";
import { useState } from "react";
import AttachFile from '@mui/icons-material/AttachFile';
import SearchIcon from "@mui/icons-material/Search";
import MoreVert from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicNoneIcon from "@mui/icons-material/MicNone";


function Chat() {
  const [input, setInput] = useState("");
  const [seed, setseed] = useState("");

  useEffect(() => {
    setseed(Math.floor(Math.random() * 5000));
  }, []);


  const sendMessage = (e) => {
e.preventDefault();
console.log("you typed >>>", input);

setInput("");

  }


  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg `} />
        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>last seen</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className={`chat_message $ {true $$ ' chat_receiver '}`}>
        <span className="chat_name">fortune
        </span>
          Hey guys!
          <span 
          className="chat_timestamp"> 3:33pm
          </span>
        </p>
        <p className={`chat_message $ {true $$ ' chat_receiver '}`}>
        <span className="chat_name">fortune
        </span>
          Hey guys!
          <span 
          className="chat_timestamp"> 3:36pm
          </span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form>
<input value={input} onChange = {(e) =>
setInput(e.target.
  value)}
 placeholder="Type a message" 
type='text'
 />
<button onClick={sendMessage}type="submit">
  Send a message</button>
        </form>
        <MicNoneIcon />
      </div>
    </div>
  );
}

export default Chat;
