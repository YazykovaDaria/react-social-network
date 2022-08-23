import Post from "./Post/Post";
//import React from "react";
//import { useRef } from "react";




const Posts = (props) => {
 //console.log(props.data);
//const ref = useRef(null);

const onAddPost = () => {
  props.addPost();
}

const onChangePost = (e) => {
 const text = e.target.value;
  props.updatePost(text);
}

  return (
    <section>
      <h2>My posts</h2>
      <div>
        <textarea name="post" id="01" cols="30" rows="2"  value={props.newPostText} onChange={onChangePost}/>
      </div>
      <div>
        <button onClick={onAddPost}>Add post</button>
      </div>
<Post data={props.posts}></Post>
  </section>
  )
}

export default Posts;