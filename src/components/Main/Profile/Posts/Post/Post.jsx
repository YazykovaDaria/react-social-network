import style from './Post.module.css';

const Post = (props) => {
//console.log(props.data);
  return props.data.map((post) =>  <div>
  <div className={style.post}>
<img src='https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg' alt='avatar' className={style.img}></img>
<p id={post.id}>{post.post}</p>
</div>
<div>like {post.like}</div>
</div>)
}

export default Post;