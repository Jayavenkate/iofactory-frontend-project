import "./SignUp.css";

import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupuser } from "../slice/userSlice";

export const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleclick = () => {
        dispatch(signupuser({ name, email, password }));
        navigate("/");
    };
    return (
        <div className="signup-con">
            <div>
                <img
                    src="https://img.freepik.com/free-vector/father-mother-son-3d-glasses-sitting-chairs-holding-popcorn-buckets-soda-watching-funny-movie-cinema-theatre-vector-illustration-family-leisure-time-entertainment-concept_74855-13067.jpg"
                    alt="signup"
                />
            </div>
            <Card className="card-con">
                <h1 style={{ textAlign: "center" }}>SignUp</h1>
                <TextField
                    label=" Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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
            
                <Button variant="contained" onClick={handleclick} sx={{width:"210px"}}>
                    Get Started
                </Button>

                <p style={{ textAlign: "center" }} onClick={() => navigate("/")}>
                    Already a member? <span style={{ color: "blue" }}>SignIn</span>
                </p>
            </Card>
        </div>
    );
};
