import { Height } from "@mui/icons-material";
import { useState } from "react";

const CommentForm = ({handleSubmit,submitLabel}:any) => {
  const [text, setText] = useState("");
  const isTextareaDisabled = text.length === 0 ;
  const onsubmit = (event:any) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  }
  return (
    <form onSubmit={onsubmit} >
        <textarea
          style={{resize:"none" , height:100, width:"50%"}}
          className="comment-form-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)} />
          <button className="comment-form-button" disabled={isTextareaDisabled} 
          style={{ margin: 3, padding:2,}}>{submitLabel}</button>
    </form>
  )
}

export default CommentForm;
