import React from "react";

const Messages = ({ messages }) => <>
    {messages.errors && Messages.errors.map((el, i) => 
        <div key={i} className="alert alert-danger">{el.msg}</div>
    )}
    {messages.info
        ? messages.info.map((el, i) => <div key={i} className="alert alert-info">{el.msg}</div>
        )
        : null
    }
</>

export default Messages;