import React , { useState } from "react";
import styles from './Register.module.css';
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass , setPass] = useState('');
    const [name , setName] = useState('');

    const passChangeHandler = (e) => {
        setPass(e.target.value);
    }
    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }
    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email , pass , name);
    }

    return (
        <div className={styles.form_container}>

        <form className={styles.register_form} onSubmit ={handleSubmit}>
            <h1>Register</h1>
            <label htmlFor='name'>Full name</label>
            <input value={name} name='name' id='name' onChange={nameChangeHandler} placeholder='Full name'></input>
            <label htmlFor='email'>Email</label>
            <input value={email} name='email' id='email' onChange={emailChangeHandler} placeholder='youremail@example.com'></input>
            <label htmlFor='password'>Password</label>
            <input value={pass} name='password' id='password' onChange={passChangeHandler} placeholder='********'></input>
            <button type='submit'>Register</button>
            <button className={styles.link_btn} onClick={() => {props.onFormSwitch('login')}}>Already have an account?Login here.</button>
        </form>

        </div>
    )
}