import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function AdminLogin () {
    const [ email, setEmail ] = useState ("");
    const [ password, setPassword ] = useState("");
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth, email, password)
            alert("Login Successful!");
            navigate("/dashboard")
        } catch (error) {
            alert("login failed" + error.meesage)
        }
    }

    return(
        <Box sx={{ maxWidth: 400, mx: "auto", mt: 5 }}>
            <Typography variant="h5" align= "center" gutterBottom>
                Admin Login
            </Typography>
            <form onSubmit={handleLogin}>
            <TextField 
            label= "Email"
            value= {email}
            margin="normal"
            fullWidth
            onChange={(e)=> setEmail(e.target.value)}
            />
            <TextField
            fullWidth
            label="Password"
            value={password}
            type="passowrd"
            onChange={(e)=>setPassword(e.target.value)}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
                Login</Button>

            </form>
        </Box>
    )
}