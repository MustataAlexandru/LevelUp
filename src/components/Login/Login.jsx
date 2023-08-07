import React, { useState } from "react";
import styles from './Login.module.css';
import customAxios from '../../server/utils/customAxios';
import Navbar from "../Navbar/Navbar";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let token = (await customAxios.post(`/login`, { email, pass })).data.token;
            localStorage.setItem('token', token);
            window.location.reload();

        } catch (error) {
            alert('Invalid credentials !');
        }
    }

    return (

        <div className={styles.form_container}>

            <form className={styles.login_form} onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@example.com" id="email" name="email"></input>
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="password" id="password" name="password"></input>
                <button type="submit" className={styles.btnSubmit}>
                    Log In
                </button>
                <button className={styles.link_btn} onClick={() => { props.toggleForm('register') }}>Don't have an account? Register here.</button>
            </form>
        </div>

    )
}

export default Login;