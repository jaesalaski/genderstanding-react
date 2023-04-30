import React from 'react';
import Main from './components/Main.jsx'

export default function Profile(props) {
  return(
    <Main>
        <main className="container">
           <h1>{props.username}</h1>
           <h2>{props.email}</h2>
        </main>
    </Main>
  )
}


