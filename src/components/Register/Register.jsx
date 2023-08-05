import React, { useState } from "react";
import styles from './Register.module.css';
import customAxios from '../../server/utils/customAxios';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [fullname, setFullName] = useState('');
    const [rpass, setRPass] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await customAxios.post('/register', { fullname, pass, rpass, email });
            alert('Very well !');
            props.toggleForm('login');
        } catch (error) {
            alert('Invalid credentials !')
        }
    }

    return (
        <div className={styles.form_container}>
        
            <form className={styles.register_form} onSubmit={handleSubmit}>
                <h1>Register</h1>
                <label htmlFor='name'>Full name</label>
                <input value={fullname} name='name' id='name' onChange={(e) => setFullName(e.target.value)} placeholder='Full name'></input>
                <label htmlFor='email'>Email</label>
                <input value={email} name='email' id='email' onChange={(e) => setEmail(e.target.value)} placeholder='youremail@example.com'></input>
                <label htmlFor='password'>Password</label>
                <input value={pass} type="password" name='password' id='password' onChange={(e) => setPass(e.target.value)} placeholder='password'></input>
                <label htmlFor='password'>Re-enter password</label>
                <input value={rpass} type="password" name='rpassword' id='rpassword' onChange={(e) => setRPass(e.target.value)} placeholder='re-enter password'></input>
                <button type='submit' className={styles.btnSubmit}>Register</button>
                <button className={styles.link_btn} onClick={() => { props.toggleForm('login') }}>Already have an account?Login here.</button>
            </form>

        </div>
    )
}

export default Register;