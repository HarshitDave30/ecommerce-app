import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const credentials = ['bhagat@gmail.com', '12345']

export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('');

    const handleUserChange = (e) => {
        setUsername(e)
    }

    const handlePassChange = (e) => {
        setPassword(e)
    }

    const handleClick = () => {
        if (username === credentials[0] && password === credentials[1]) {
            setErrorMsg('');
        } else {
            setErrorMsg('Username or password is incorrect!');
        }
    };

    

    console.log(errorMsg)

    return (
        <Container sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: '#212121' }} maxWidth="100%">
            <Grid item md={12}>
                <Typography sx={{ color: '#fff', marginBottom: 5 }} gutterBottom variant="h3" component="div">
                    Login
                </Typography>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <TextField sx={{ marginBottom: 5 }} onChange={(e) => handleUserChange(e.target.value)} fullWidth id="standard-basic" color="white" label="User Name" focused variant="standard" />
                    <TextField sx={{ marginBottom: 5 }} onChange={(e) => handlePassChange(e.target.value)} type='password' fullWidth id="standard-basic1" color="white" label="Password" focused variant="standard" />
                </Box>

                <Button onClick={handleClick} variant='contained' size="large" sx={{ fontWeight: 700 }} >
                    {username === credentials[0] && password === credentials[1] ?
                        (<Link style={{ color: '#fff', textDecoration: 'none' }} to='/'>LOGIN</Link>) :
                        (<Link style={{ color: '#fff', textDecoration: 'none' }}>LOGIN</Link>)
                    }
                </Button>

                <Typography sx={{ color: '#fff' }} gutterBottom variant="h6" component="div">
                    {errorMsg}
                </Typography>

            </Grid>
        </Container>
    )
}
