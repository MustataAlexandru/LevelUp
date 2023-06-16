import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Container, Paper, Link } from '@mui/material'
import axios from 'axios';
import { Grid } from '@mui/material';

const config = {
    'Content-Type': 'application/json',
};
const Login = () => {
    const [isLogin, setLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [open, setOpen] = React.useState(false);
    const [password, setPassword] = useState('');
    const [rpassword, setPasswordR] = useState('');
    const [room, setRoom] = useState('');
    const onButtonClick = async () => {
        if (isLogin) {
            let token;
            try {
                token = (await axios.post(`/login`, { username, password, room }, config)).data.token;
                localStorage.setItem('token', token);
                window.location.reload();
            } catch (error) {
                alert(error.response.data.err);
            }
        } else {
            try {
                await axios.post('/register', { username, password, rpassword }, config);
                alert('Very well !');
                changeClient();
                setPasswordR('');
            } catch (error) {
                alert(error.response.data.err);
            }
        }
    };
    const changeClient = () => {
        setLogin(!isLogin);
    }
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Paper elevation={5}>
                    <Box padding={3} component="form" noValidate sx={{ mt: 1, textAlign: 'center' }}>
                        <Typography component="h1" variant="h5">
                            {isLogin ? 'Login' : 'Register'}
                        </Typography>
                        <TextField
                            margin="normal"
                            required
                            onChange={(e) => { setUsername(e.target.value); }}
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            value={username}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            onChange={(e) => { setPassword(e.target.value); }}
                            id="password"
                            label="Password"
                            name="password"
                            type='password'
                            autoFocus
                        />
                        {!isLogin && (
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                onChange={(e) => { setPasswordR(e.target.value) }}
                                id="rpassword"
                                label="Retype your password"
                                name="rpassword"
                                type='password'
                                autoFocus
                            />
                        )}
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Button
                                    onClick={() => { if (isLogin) setOpen(true); else onButtonClick() }}
                                    fullWidth
                                    variant="contained"
                                >
                                    {isLogin ? 'Login' : 'Register'}
                                </Button>
                            </Grid>
                        </Grid>
                        <br />
                        <Link onClick={changeClient}>{`Go to ${isLogin ? 'registration' : 'login'}`}</Link>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}
export default Login;