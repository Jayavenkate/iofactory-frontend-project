import './Login.css'
import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginuser } from "../slice/userSlice";

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = async () => {
        const response = await dispatch(loginuser({ email, password }));
        const token = response.payload.token;
        if (token) {
            localStorage.setItem("token", token);
            navigate("/movielist");
        } else {
            console.log("err");
        }
    };
    return (
        <div>
            <Card className="login-con">
                <h1 style={{ textAlign: "center" }}>Login</h1>

                <TextField
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button variant="contained" onClick={handleClick}>
                    Login
                </Button>

                <p style={{ textAlign: "center" }} onClick={() => navigate("/signup")}>
                    Dont have an account?
                    <span style={{ color: "blue" }}>SignUp</span>
                </p>
            </Card>
        </div>
    );
};
