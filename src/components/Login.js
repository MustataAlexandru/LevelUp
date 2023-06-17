import React , {useState} from "react";
import styles from './Login.module.css';
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }
    const passChangeHandler = (e) => {
        setPass(e.target.value);
    }
    const handleSubmit = (event) => {
         event.preventDefault();


    }

    return (
        <div className ={styles.form_container}>

        <form className={styles.login_form} onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label htmlFor="email">email</label>
            <input value={email} onChange={emailChangeHandler}type="email" placeholder="youremail@example.com" id="email" name="email"></input>
            <label htmlFor="password">password</label>
            <input value={pass} onChange={passChangeHandler} type="password" placeholder="********" id="password" name="password"></input>
            <button type="submit">Log In</button>
            <button className={styles.link_btn} onClick={() => {props.onFormSwitch('register')}}>Don't have an account? Register here.</button>
        </form>

        </div>
    )
}