import "./SignUp.styled.jsx";

import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupuser } from "../../slice/userSlice";
import { CardContainer, SignUpContainer } from "./SignUp.styled.jsx";

export const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState("test");
    const [email, setEmail] = useState("test@gmail.com");
    const [password, setPassword] = useState("test123");
    const [error, setError] = useState(false);

    const handleclick = () => {
        if (!name || !email || !password) {
            setError(true);
            return;
        }
        dispatch(signupuser({ name, email, password }));
        navigate("/");
    };
    return (
        <SignUpContainer>
            <div>
                <img
                    src="https://img.freepik.com/free-vector/father-mother-son-3d-glasses-sitting-chairs-holding-popcorn-buckets-soda-watching-funny-movie-cinema-theatre-vector-illustration-family-leisure-time-entertainment-concept_74855-13067.jpg"
                    alt="signup"
                />
            </div>
            <CardContainer>
                <h1 style={{ textAlign: "center" }}>SignUp</h1>
                <TextField
                    label=" Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={error && !name}
                    helperText={error && !name ? "Name is required" : ""}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={error && !email}
                    helperText={error && !email ? "email is required" : ""}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={error && !password}
                    helperText={error && !password ? "password is required" : ""}
                />

                <Button
                    variant="contained"
                    onClick={handleclick}
                    sx={{ width: "350px" }}
                >
                    Get Started
                </Button>

                <p style={{ textAlign: "center" }} onClick={() => navigate("/")}>
                    Already a member? <span style={{ color: "blue" }}>SignIn</span>
                </p>
            </CardContainer>
        </SignUpContainer>
    );
};
