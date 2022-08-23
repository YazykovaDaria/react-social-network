import aside from './Aside.module.css'
import { NavLink } from 'react-router-dom';

//переключает классы у активных ссылок (см уроки про react-router-dom)
const setLink = ({isActive}) => isActive ? aside.active : aside.item;

const Aside = () => {
  return (
    <aside className={aside.aside}>
<ul className={aside.list}>
  <li><NavLink to='/profile' className={setLink}>Profile</NavLink>
    </li>
  <li><NavLink to='/dialogs' className={setLink}>Messages</NavLink>
    </li>
  <li><NavLink to='/news' className={setLink}>News</NavLink>
    </li>
  <li><NavLink to='/music' className={setLink}>Music</NavLink></li>
  <li><NavLink to='/users' className={setLink}>Users</NavLink></li>
  <li><NavLink to='/settings' className={setLink}>Settings</NavLink></li>
</ul>
</aside>
  )
}

export default Aside;