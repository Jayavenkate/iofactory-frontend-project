import { useEffect } from "react";
import "./Movielist.styled.jsx";
import { useDispatch, useSelector } from "react-redux";
import { deleteTaskToServer, getmovieFromServer } from "../../slice/slice";
import { NavBar } from "../Navbar/Navbar";
import { Button, Card, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { DivContainer, DivWrapper, HElement } from "./Movielist.styled.jsx";

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

      <DivContainer>
        {movieList.map((mv, index) => (
          <div key={index}>
            <Card>
              <img
                src={mv.Poster}
                alt={mv.movieName}
                width={230}
                height={300}
                style={{ objectFit: "cover" }}
              />
              <HElement>{mv.movieName}</HElement>
              <DivWrapper>
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
              </DivWrapper>
            </Card>
          </div>
        ))}
      </DivContainer>
    </div>
  );
};
