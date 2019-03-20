'use strict';

let postDiv = document.querySelector('.post-div')
let newPost = document.querySelector('.test-button');
console.log(newPost);
console.log(postDiv);


newPost.onclick = () => {
  let post = document.createElement('div');
  let postHead = document.createElement('div');
  let postBody = document.createElement('div');
  let postTitle = document.createElement('h2');
  let postText = document.createElement('p');
  let comment = document.createElement('p');
  
  postHead.appendChild(postTitle);
  postHead.appendChild(postText);
  postBody.appendChild(comment);
  post.appendChild(postHead);
  post.appendChild(postBody);
  postDiv.appendChild(post);

  postTitle.innerText = 'Post Title';
  postText.innerText = 'post text';
  postBody.innerText = 'Comments';
  comment.innerText = 'comment content';

  post.setAttribute('class' , "post")
};
