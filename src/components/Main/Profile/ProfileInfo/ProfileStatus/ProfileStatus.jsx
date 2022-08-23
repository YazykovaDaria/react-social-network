import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    userStatus: this.props.userStatus,
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.userStatus !== prevProps.userStatus) {
      this.setState({
        userStatus: this.props.userStatus
      })
      
    }
  }

activateEditMode = () => {
  this.setState({
    editMode: true,
  })
}

deactivateEditMode = () => {
  this.setState({
    editMode: false,
  })
  this.props.updateUserStatus(this.state.userStatus)
};

onStatusChange = (e) => {
this.setState({
  userStatus: e.currentTarget.value
})
}

  render() {
  const props = this.props;
    return <>    
      {!this.state.editMode && 
      <div>
      <span onDoubleClick={this.activateEditMode}>{props.userStatus || 'not status'}</span>
      </div>
      }
        {this.state.editMode && 
        <div>
        <input autoFocus onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.userStatus} />
        </div>
        }
    </>
  }

}

//export default ProfileStatus;