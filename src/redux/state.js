import { profileReducer } from "./profileReducer";

const store = {
  _state: {
    dialogPage: {
      dialogItem: [
        {name: 'Igor', id: 1},
        {name: 'Oleg', id: 2},
        {name: 'Misha', id: 3},
      ],
      messages: [
      {message: 'Hello', id: 1},
      {message: 'Haw are you?', id: 2},
      {message: 'Where are you?', id: 3},
      ]
    },
   profilePage: {
      posts: [
    {post: 'hello', id: 1, like: 11},
    {post: 'yo', id: 2, like: 21},
    {post: 'it camasutra', id: 3, like: 1},
      ],
      newPostText: 'samurai!!',
    }
  },
  getState() {
    return this._state;
  },
  _renderAll() {
console.log('store changed');
  },
  subscribe (observer) {
    this._renderAll = observer;
  },

  dispatch(action) {
this._state.profilePage = profileReducer(this._state.profilePage, action);
this._renderAll(this._state);
}
}

export default store;