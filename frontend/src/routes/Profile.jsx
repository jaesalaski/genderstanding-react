import React from "react";

export default function Profile(props) {
  return(
        <main className="container">
           <h1>{props.username}</h1>
           <h2>{props.email}</h2>
        </main>
  )
}
