import { Button, TextField } from "@mui/material";
import { NavBar } from "../Navbar/Navbar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskToServer } from "../../slice/slice";
import { useNavigate } from "react-router-dom";
import { AddContainer, HElement } from './AddMovie.styled';

export const AddMovie = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //input states
    const [movieName, setmovieName] = useState("");
    const [YearofRelease, setYearofRelease] = useState("");
    const [Plot, setPlot] = useState("");
    const [Poster, setPoster] = useState("");
    const [HeroName, setHeroName] = useState("");
    const [HeroineName, setHeroineName] = useState("");
    const [ComedianName, setComedianName] = useState("");
    const [villanName, setVillanName] = useState("");
    const [ProducerName, setProducerName] = useState("");
    const [Gender, setGender] = useState("");
    const [DOB, setDOB] = useState("");
    const [Bio, setBio] = useState("");
    const [Story, setStory] = useState("");

    const handleAddMovie = () => {
        const newmovie = {
            movieName,
            YearofRelease,
            Plot,
            Poster,
            HeroName,
            HeroineName,
            ComedianName,
            villanName,
            ProducerName,
            Gender,
            DOB,
            Bio,
            Story,
        };
        console.log("newmovie", newmovie);

        dispatch(addTaskToServer(newmovie));
        setmovieName("");
        setYearofRelease("");
        setPlot("");
        setPoster("");
        setHeroName("");
        setHeroineName("");
        setComedianName("");
        setVillanName("");
        setProducerName("");
        setGender("");
        setDOB("");
        setBio("");
        setStory("");
        navigate("/movielist");
    };
    const isFormFilled = () => {
        return (
            movieName.trim() !== "" &&
            YearofRelease.trim() !== "" &&
            Plot.trim() !== "" &&
            Poster.trim() !== "" &&
            HeroName.trim() !== "" &&
            HeroineName.trim() !== "" &&
            ComedianName.trim() !== "" &&
            villanName.trim() !== "" &&
            ProducerName.trim() !== "" &&
            Gender.trim() !== "" &&
            DOB.trim() !== "" &&
            Bio.trim() !== "" &&
            Story.trim() !== ""
        );
    };
    return (
        <div>
            <NavBar />
            <AddContainer >
                <HElement >Enter Movies Details</HElement>
                <TextField
                    label="movie Name"
                    variant="outlined"
                    size="small"
                    value={movieName}
                    onChange={(e) => setmovieName(e.target.value)}
                />
                <TextField
                    
                    variant="outlined"
                    size="small"
                    type="date"
                    value={YearofRelease}
                    onChange={(e) => setYearofRelease(e.target.value)}
                    sx={{ width: "210px" }}
                />
                <TextField
                    label=" Genere"
                    variant="outlined"
                    size="small"
                    value={Plot}
                    onChange={(e) => setPlot(e.target.value)}
                />

                <TextField
                    label="Poster"
                    variant="outlined"
                    size="small"
                    value={Poster}
                    onChange={(e) => setPoster(e.target.value)}
                />
                <TextField
                    label="Story"
                    variant="outlined"
                    size="small"
                    value={Story}
                    onChange={(e) => setStory(e.target.value)}
                />
                <h3>Enter Actors Details</h3>
                <TextField
                    label="Hero Name"
                    variant="outlined"
                    size="small"
                    value={HeroName}
                    onChange={(e) => setHeroName(e.target.value)}
                />
                <TextField
                    label="Heroine Name"
                    variant="outlined"
                    size="small"
                    value={HeroineName}
                    onChange={(e) => setHeroineName(e.target.value)}
                />
                <TextField
                    label="Comedian Name"
                    variant="outlined"
                    size="small"
                    value={ComedianName}
                    onChange={(e) => setComedianName(e.target.value)}
                />
                <TextField
                    label="villan Name"
                    variant="outlined"
                    size="small"
                    value={villanName}
                    onChange={(e) => setVillanName(e.target.value)}
                />
                <h3>Enter Producer Details</h3>
                <TextField
                    label=" Producer Name"
                    variant="outlined"
                    size="small"
                    value={ProducerName}
                    onChange={(e) => setProducerName(e.target.value)}
                />
                <TextField
                    label="Gender"
                    variant="outlined"
                    size="small"
                    value={Gender}
                    onChange={(e) => setGender(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    size="small"
                    value={DOB}
                  
                    type="date"
                    onChange={(e) => setDOB(e.target.value)}
                    sx={{ width: "210px" }}
                />
                <TextField
                    label="Bio"
                    variant="outlined"
                    size="small"
                    value={Bio}
                    onChange={(e) => setBio(e.target.value)}
                />
                <Button
                    variant="contained"
                    onClick={handleAddMovie}
                    disabled={!isFormFilled()}
                >
                    AddMovie
                </Button>
            </AddContainer>
        </div>
    );
};
