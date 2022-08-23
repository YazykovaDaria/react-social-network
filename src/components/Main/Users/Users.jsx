import style from './Users.module.css';
import avatar from '../../../assets/images/avatar.jpg';
import {NavLink} from 'react-router-dom';

const Users = (props) => {

  const pagesCount = Math.ceil(props.usersCount / props.pagesSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i += 1) {
      pages.push(i)
      if (i === 20) break
    }

    return (
      <section>
        <h2>Users</h2>
{pages.map((num) => {
  return <span className={props.currentPage === num ? style.activeCount : ''} onClick={() => props.onPageChanded(num)}>{num} </span>
})}

        {props.users.map((user) => {
      
      const onToggleFollow = () => {
        props.toggleFollow(user.id)
      }

        return (
    <div id={user.id} className={style.user_container}>
      <div className={style.avatar}>
        <NavLink to={`/profile/${user.id}`}>
      <img className={style.img} src={user.photos.small === null ? avatar : user.photos.small} alt="avatar"/>
      </NavLink>
      <button onClick={onToggleFollow}>{user.followed ? 'follow' : 'unfollow'}</button>
      </div>
      <div>
        <p>{user.name}</p>
        <p>{user.status}</p>
      </div>
    </div>
        )
      })}
      <button>Show more</button>
      </section>
     )
  }


export default Users;