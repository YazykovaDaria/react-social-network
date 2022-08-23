import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
 //console.log(props.data);
  const tags = props.data.map((dialog) => {
    const path = `/dialogs/${dialog.id}`
    return (
      <div>
      <NavLink to={path}>{dialog.name}</NavLink>
      </div>
    )
  })
  return tags;
};

export default DialogItem;