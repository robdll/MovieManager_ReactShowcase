/* React import */
import React, { useState } from "react";

/* Style */
import style from "./auth.module.scss";

/* Component implementation */
const Auth = (props) => {

  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function signUp (e) {
    e.preventDefault();
    props.signUp({email, password});
  }
  function signIn (e) {
    e.preventDefault();
    props.signIn({email, password});
  }
  function signOut (e) {
    e.preventDefault();
    props.signOut();
  }

  let login;
  if(!props.auth.loggedIn) {
    const loginBtn = !props.auth.fetching && <button onClick={signIn} >LOGIN</button>;
    const signUpBtn = !props.auth.fetching && <button onClick={signUp} >SIGN UP</button>;
    const spinner = props.auth.fetching && <span className={style.spinner}></span>;
    const error = props.auth.error && <div className={style.error}>{props.auth.error}</div>
    login = <div className={style.loginModal}>
      <form className={style.form}>
        <span>Login or Signup</span>
        <input onChange={ (e) => {setUsername(e.target.value)}} type="text" placeholder="Username"/>
        <input onChange={ (e) => {setPassword(e.target.value)}} type="password" placeholder="Password"/>
        {spinner}
        {loginBtn}
        {signUpBtn}
        {error}
      </form>
    </div>
  }

  const logoutErr = props.auth.error ? style.logoutErr : '';
  const spinner = props.auth.fetching && <span className={style.spinner}></span>;
  const logout = <div className={style.authContainer}>
      <button className={style.userIcon} tabIndex="-1"> 
        <img  alt={`User icon`} src={`${process.env.PUBLIC_URL}/svg/user_icon.svg`} /> 
      </button>
      <ul className={`${style.logoutMenu} ${logoutErr}`}>
        <li >{spinner} <button tabIndex="1" onClick={ signOut } > Logout</button> </li>
      </ul>
    </ div>;  

  return <> 
    {login}
    {logout}
  </>;
  
};


export default Auth;
