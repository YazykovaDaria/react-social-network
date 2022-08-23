import style from'./ProfileInfo.module.css';
import Preloader from '../../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus/PfofileStatusHook';


const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader></Preloader>
  }
  return (
    <div>
    {/* <div>
  <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" className={style.img} alt='volcano and lake'></img>
  </div> */}
  <img src={props.profile.photos.large} alt="avatar" /> 
  <div>
    <ProfileStatus {...props}></ProfileStatus>
    <p>Name: {props.profile.fullName}</p>
<p>Faind work: {props.profile.lookingForAJob ? 'yes' : 'no'}</p>
    <p>My work: {props.profile.lookingForAJobDescription}</p>
  </div>
  </div>
  )
}

export default ProfileInfo;