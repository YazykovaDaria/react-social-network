import profile from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/Post/PostsContainer';

const Profile = (props) => {
  
  return (
    <div>
  <ProfileInfo {...props}></ProfileInfo>
<PostsContainer></PostsContainer>
</div>
  )
}

export default Profile;