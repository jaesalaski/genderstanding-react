import React from 'react';
import Main from './components/Main.jsx'

export default function Feed(props) {
  return (
    <Main>
      {props.posts.map(post =>
        <li>
          <h2 className="font-bold text-lg">{post.title}</h2>
          <span className="text-black">{post.likes}</span>
        </li>
      )}
    </Main>
  )
}


