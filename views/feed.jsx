import React from 'react';
import Main from './components/Main.jsx'

export default function Index() {
    return (
        <Main>
            <form
                action="/post/createPost"
                enctype="multipart/form-data"
                method="POST"
            >
                <div class="grid justify-items-center">
                    <div class="grid bg-base-100 justify-items-center flex-shrink-0 w-11/12 6xl shadow-xl rounded-lg border border-black mt-2.5 p-2.5">
                        <textarea id="title" name="title" rows="3" class="block p-2.5 w-full text-sm text-gray-900 bg-base-100 rounded-lg border border-secondary" placeholder="Ask a Question..."></textarea>
                        <button type="submit" class="btn btn-primary w-3/4 max-w-xs mt-2.5" value="Upload">Submit</button>
                    </div>
                </div>
            </form>
            <div class="grid justify-items-center">
                <div class="grid bg-base-100 justify-items-center mt-2.5 border border-black flex-shrink-0 w-11/12 shadow-xl mb-2.5 rounded-lg p-5">
                    <ul class="row list-unstyled">
                        <% for(var j=0; j<posts.length; j++) {%>
          <li class="mt-5 mb-5 ">
            <h2 class = "font-bold text-lg"><%= posts[j].title%></h2>
            <form
              class="inline-block -"
              action="post/likePost/<%= posts[j]._id %>?_method=PUT"
              method="POST"
              >
              <button class="fa fa-heart fa-xs text-secondary" type="submit">
                  <span class="text-black"><%= posts[j].likes %></span>
              </button>
            </form>
            <%if(posts[j].user.toString() == user._id.toString()){ %>    
              <form
                action="/post/deletePost/<%= posts[j]._id %>?_method=DELETE"
                method="POST"
                class="inline-block ml-2.5"
                >
                <button class="fa fa-trash fa-xs text-primary" type="submit"></button>
              </form>
            <%}%>       
          </li>
          <% for(var i=0; i<comments.length; i++) {%>
            <% if(comments[i].post.toString() == posts[j]._id.toString()) {%> 
              <li class="col-6 justify-content-between mt-2">
                <h2><%= comments[i].comment%></h2>
                  <form
                    class="col-1 inline-block"
                    action="comment/likeComment/<%= comments[i]._id %>?_method=PUT"
                    method="POST"
                    >
                    <button class="fa fa-heart fa-xs text-secondary" type="submit">
                      <div class="fa">
                        <span class="text-black"><%= comments[i].likes %></span>
                      </div>
                    </button>
                  </form>
                  <% if(comments[i].user.toString() == user.id.toString()) {%>
                    <form
                      action="/comment/deleteComment/<%= comments[i]._id %>?_method=DELETE"
                      method="POST"
                      class="inline-block ml-2.5"
                      >
                        <button class="fa fa-trash fa-xs text-primary" type="submit"></button>
                    </form>
                  <% }%>
              </li>
            <% } %>
                        <% } %>
                        <div class="mt-5">
                            <form action="/comment/createComment/<%=posts[j]._id%>" method="POST">
                                <div class="mb-3 p-2.5 border-b border-gray-200">
                                    <textarea id="comment" name="comment" rows="2" input type="text" class="p-2.5 inline-block form-control bg-base-100 rounded-md border border-secondary w-11/12" name="comment" placeholder="Your answer..."></textarea>
                                    <button type="submit" class="fa fa-check" value="Upload"></button>
                                </div>
                            </form>
                        </div>
                        <% } %>
                    </ul>
                </div>
            </div>
        </Main>
    )
}


