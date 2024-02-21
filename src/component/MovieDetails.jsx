import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieById } from "../slice/slice";

import { Button, Card } from "@mui/material";

export const MovieDetails = () => {
    const { id } = useParams();
    const { selectedmovie } = useSelector((state) => state.movies);
    const navigate = useNavigate()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieById(id));
    }, [id, dispatch]);
    return (
        <div>

            <Button onClick={() => navigate("/movielist")} variant="contained">Back</Button>
            <div style={{ marginTop: "20px", textAlign: "center" }}>
                <img
                    src={selectedmovie.Poster}
                    alt={selectedmovie.movieName}
                    width={700}
                    height={400}
                    style={{ objectFit: "contain" }}
                />
                <h1 style={{ color: "red" }}>{selectedmovie.movieName}</h1>
                <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center", justifyContent: "center" }}>
                    <Button
                        variant="contained"
                        sx={{ background: "#616161", color: "#ffff" }}
                    >
                        Play
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ background: "#ff3d00", color: "#ffff" }}
                    >
                        Trailer
                    </Button>
                </div>
                <Card
                    sx={{
                        width: "450px",
                        margin: "20px auto",
                        background: "#424242",
                        color: "#ffff",
                        textAlign: "justify",
                        padding: "20px"


                    }}
                >
                    <h4>Release Year:{selectedmovie.YearofRelease}</h4>
                    <h4>Plot:{selectedmovie.Plot}</h4>
                    <h4>
                        Actors:{selectedmovie.HeroName},{selectedmovie.HeroineName},
                        {selectedmovie.ComedianName}, {selectedmovie.villanName}
                    </h4>
                    <h4 style={{ width: "430px" }}>Story:{selectedmovie.Story}</h4>
                    <h4>Producer:{selectedmovie.ProducerName}</h4>

                </Card>
            </div>
        </div>
    );
};
