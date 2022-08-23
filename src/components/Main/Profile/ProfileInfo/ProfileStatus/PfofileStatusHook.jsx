import { useState, useEffect  } from "react"


const ProfileStatus = (props) => {

const [editMode, setEditMode] = useState(false);
const [userStatus, setStatus] = useState(props.userStatus);

useEffect(() => {
  setStatus(props.userStatus)
}, [props.userStatus])

const activateEditMode = () => {
  setEditMode
(true)
}

const deactivateEditMode = () => {
  setEditMode
(false)
  props.updateUserStatus(userStatus)
};

const onStatusChange = (e) => {
  setStatus(e.currentTarget.value)
  }

    return <>    
      { !editMode && 
      <div>
      <span onDoubleClick={activateEditMode}>{props.userStatus || 'not userStatus'}</span>
      </div>
      }
        {editMode && 
        <div>
        <input autoFocus onBlur={deactivateEditMode} onChange={onStatusChange} value={userStatus} />
        </div>
        }
    </>
  }


export default ProfileStatus;