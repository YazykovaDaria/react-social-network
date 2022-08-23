const initialState = {
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
};

const dialogReducer = (state = initialState, action) => {
  return state
}

export default dialogReducer;