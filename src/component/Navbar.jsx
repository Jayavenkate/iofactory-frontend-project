import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const NavBar = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        localStorage.removeItem("token");
        navigate("/")
    }
    return (
        <div>
            <AppBar >
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        IMDB Clone
                    </Typography>
                    <Button color="inherit" onClick={() => navigate("/addmovie")}>AddMovie</Button>
                    <Button color="inherit" onClick={() => navigate("/movielist")}>MovieList</Button>
                    <Button color="inherit" onClick={handleClick}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

