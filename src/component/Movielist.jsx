import { useEffect } from "react";
import "./Movielist.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteTaskToServer, getmovieFromServer } from "../slice/slice";
import { NavBar } from "./Navbar";
import { Button, Card, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export const MovieList = () => {
  const { movieList } = useSelector((state) => state.movies);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getmovieFromServer());
  }, [dispatch]);

  const handledelete = (id) => {
    dispatch(deleteTaskToServer({ id: id })).then(() => {
      navigate("/addmovie");
    });
  };
  return (
    <div>
      <NavBar />

      <div className="movie-con">
        {movieList.map((mv, index) => (
          <div key={index}>
            <Card sx={{ width: "230px", height: "430px" }}>
              <img
                src={mv.Poster}
                alt={mv.movieName}
                width={230}
                height={300}
                style={{ objectFit: "cover" }}
              />
              <h3 style={{ textAlign: "center", color: "red" }}>
                {mv.movieName}
              </h3>
              <div 
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => navigate(`/movie/${mv._id}`)}
                >
                  view
                </Button>
                <div>
                  <IconButton onClick={() => navigate(`/edit/${mv._id}`)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handledelete(mv._id)}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
