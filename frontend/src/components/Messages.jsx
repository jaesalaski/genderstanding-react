import React from 'react';

const Messages = ({ messages }) => <>

<<<<<<< HEAD
    {messages.errors && messages.errors.map((el, i) =>
=======
    {messages.errors && messages.errors.map((el, i) => 
>>>>>>> 5932c7f3b96f0d1ca9d98a022ea53ce1a5924707
        <div key={i} className="alert alert-danger">{el.msg}</div>
    )}

    {messages.success && messages.success.map((el, i) =>
        <div key={i} className="alert alert-success">{el.msg}</div>
    )}

    {messages.info
        ? messages.info.map((el, i) => <div key={i} className="alert alert-info">{el.msg}</div>
        )
        : null
    }
</>

export default Messages