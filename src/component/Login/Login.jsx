import "./Login.styled.jsx";
import { Button,  TextField, styled } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginuser } from "../../slice/userSlice";
import { LoginContainer } from "./Login.styled.jsx";


export const ErrorButton = styled(Button)({
    backgroundColor: "red",
    color: "white",
    "&:hover":{
        backgroundColor: "red",  
    }

})
export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleClick = async () => {
        if (!email || !password) {
            setError(true);
            return;
        }
        try {
            const response = await dispatch(loginuser({ email, password }));
            const token = response.payload.token;
            if (token) {
                localStorage.setItem("token", token);
                navigate("/movielist");
            } else {
                setError(true);
            }
        } catch (err) {
            console.log("Invalid credential");
        }
    };

    return (
        <div>
            <LoginContainer >
                <h1 style={{ textAlign: "center" }}>Login</h1>

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
                {error ? <ErrorButton variant="contained" onClick={handleClick}>
                    Login
                </ErrorButton> : <Button variant="contained" onClick={handleClick}>
                    Login
                </Button>}


                <p style={{ textAlign: "center" }} onClick={() => navigate("/signup")}>
                    Dont have an account?
                    <span style={{ color: "blue" }}>SignUp</span>
                </p>
            </LoginContainer>
        </div>
    );
};
