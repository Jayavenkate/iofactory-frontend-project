import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieById, updateTaskToServer } from "../slice/slice";
import { useNavigate, useParams } from "react-router-dom";
import { NavBar } from "./Navbar";

export function EditMovie() {
  const { id } = useParams();
  const { selectedmovie, isLoading } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieById(id));
  }, [dispatch, id]);
  return (
    <div>
      {isLoading ? <h1>loading.....</h1> : selectedmovie && <EditMovieForm />}
    </div>
  );
}

export function EditMovieForm() {
  const { selectedmovie } = useSelector((state) => state.movies);
  //selected data
  const [movieName, setmovieName] = useState(selectedmovie.movieName);
  const [YearofRelease, setYearofRelease] = useState(
    selectedmovie.YearofRelease
  );
  const [Plot, setPlot] = useState(selectedmovie.Plot);
  const [Poster, setPoster] = useState(selectedmovie.Poster);
  const [HeroName, setHeroName] = useState(selectedmovie.HeroName);
  const [HeroineName, setHeroineName] = useState(selectedmovie.HeroineName);
  const [ComedianName, setComedianName] = useState(selectedmovie.ComedianName);
  const [villanName, setVillanName] = useState(selectedmovie.villanName);
  const [ProducerName, setProducerName] = useState(selectedmovie.ProducerName);
  const [Gender, setGender] = useState(selectedmovie.Gender);
  const [DOB, setDOB] = useState(selectedmovie.DOB);
  const [Bio, setBio] = useState(selectedmovie.Bio);
  const [Story, setStory] = useState(selectedmovie.Story);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Handle Edit function

  const handleEdit = () => {
    const updatedMovie = {
      id: selectedmovie.id,
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
    console.log(updatedMovie);
    dispatch(
      updateTaskToServer({ movies: updatedMovie, id: selectedmovie._id })
    );
    navigate("/movielist");
  };

  return (
    <div>
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "600px",
          margin: "0 auto",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <h3 style={{ marginTop: "70px" }}>Enter Movies Details</h3>
        <TextField
          label="movie Name"
          variant="outlined"
          size="small"
          value={movieName}
          onChange={(e) => setmovieName(e.target.value)}
        />
        <TextField
          label="Year of Release"
          variant="outlined"
          size="small"
          type="number"
          value={YearofRelease}
          onChange={(e) => setYearofRelease(e.target.value)}
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
          label="DOB"
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
        <Button variant="contained" onClick={handleEdit}>
          Edit Movie
        </Button>
      </div>
    </div>
  );
}
