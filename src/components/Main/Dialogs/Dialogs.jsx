import dialog from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

// const state = props.store.getState();

// const addMessage = (e) => {
//   const message = e.target.value;
//   alert(message);
// }

  return (
    <section className={dialog.section}>
      <div>
        dialogs раскомментить и переделать через rr
        {/* <DialogItem data={state.dialogPage.dialogItem}></DialogItem>
    </div>
    <div>
    <Message data={state.dialogPage.messages}></Message>
    </div>
    <div>
      <textarea name="message" id="01" cols="20" rows="2"></textarea>
    </div>
    <div>
      <button onClick={addMessage}>Add message</button> */}
    </div>
    </section>
  )
}

export default Dialogs;