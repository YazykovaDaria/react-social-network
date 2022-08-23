import style from './Login.module.css';
import { login } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';


const Login = (props) => {
if (props.isAuth) {
  return <NavLink to={'/profile'}></NavLink>
}

  return <div className={style.loginForm}>
  <h2>Login</h2>
<LoginForm {...props}></LoginForm>
  </div>
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})
const LoginContainer = connect(mapStateToProps, {login})(Login)

export default LoginContainer;

