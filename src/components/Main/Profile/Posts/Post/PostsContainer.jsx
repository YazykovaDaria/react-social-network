import { connect } from "react-redux";
import { createPostAction, createUpdatePostAction } from "../../../../../redux/profileReducer";
import Posts from "../Posts";



// const sPostsContainer = (props) => {
//  //console.log(props.data);

// const state = props.store.getState();

// const addPost = () => {
//   props.store.dispatch(createPostAction());
// }

// const updatePost = (text) => {
// props.store.dispatch(createUpdatePostAction(text));
// }

//   return <Posts updatePost={updatePost}
//   addPost={addPost}
//   newPostText={state.profilePage.newPostText}
//   data={state.profilePage}
//   ></Posts>
// }

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(createPostAction());
    },
    updatePost: (text) => {
      dispatch(createUpdatePostAction(text))
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;