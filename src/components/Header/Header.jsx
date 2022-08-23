import header from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={header.header}>
  <img className={header.img} src="https://media-exp1.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs" alt='logo'></img>
  <div>
    {props.isAuth ? <div>{props.login} <button onClick={props.logout}>Log out</button></div>
     : <NavLink to={`/login`}>Login</NavLink>}
  </div>
</header>
  )
}

export default Header;