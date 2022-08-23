import { Formik} from 'formik';
import { validationLoginScheema } from '../../../utils/validators';
import style from '../Login.module.css';
//import { NavLink } from 'react-router-dom';

const LoginForm = (props) => {
  return <>
  <Formik
  initialValues={{
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
  }}
  validateOnBlur

  onSubmit={(values, onSubmitProps) => {
    //console.log(values)
    const { setStatus,setSubmitting } = onSubmitProps;
    props.login(values.email, values.password, values.rememberMe, setStatus, setSubmitting);
    setSubmitting(false);
  }}

  validationSchema={validationLoginScheema}
  >
{({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, status}) => {

const isValidValue = (val) => touched[val] && errors[val];
const validationMistake = (val) => isValidValue(val) && <p className={style.invalid}>{errors[val]}</p>;


return (
  <form>
     <p>
      <label htmlFor={'email'} className={style.label}>email</label><br />
      <input type="email" 
      name='email' 
      onChange={handleChange} 
      onBlur={handleBlur}
      value={values.email}
      className={isValidValue('email') && style.invalidInput}
      />
    </p> 
      {validationMistake('email')}

    <p>
      <label htmlFor={'password'} className={style.label}>password</label><br />
      <input type="password" 
      name='password' 
      onChange={handleChange} 
      onBlur={handleBlur}
      value={values.password}
      className={isValidValue('password') && style.invalidInput}
      />
    </p> 
      {validationMistake('password')}

      <p>
      <label htmlFor={'confirmPassword'} className={style.label}>Confirm the password</label><br />
      <input type="password" 
      name='confirmPassword' 
      onChange={handleChange} 
      onBlur={handleBlur}
      value={values.confirmPassword}
      className={isValidValue('confirmPassword') && style.invalidInput}
      />
    </p> 
      {validationMistake('confirmPassword')}

     
      <p>
      <label htmlFor={'rememberMe'} className={style.label}>Remember me</label>
      <input type="checkbox" 
      name='rememberMe' 
      onChange={handleChange} 
      onBlur={handleBlur}
      value={values.rememberMe}
      />
    </p> 
    <p className={style.invalid}>{status}</p>

    <button disabled={!isValid && !dirty}
    onClick={handleSubmit}
    type='submit'
    >Submit</button>
  </form>
)
}}
  </Formik>
  </>
}

export default LoginForm;