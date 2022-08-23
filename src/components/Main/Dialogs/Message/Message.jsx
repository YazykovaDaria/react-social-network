const Message = (props) => {
  return props.data.map((message) => <div id={message.id}>{message.message}</div>)
}

export default Message;