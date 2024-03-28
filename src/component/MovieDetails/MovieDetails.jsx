import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieById } from "../../slice/slice";


import {
  BackButton,
  CardDiv,
  DivContainer,
  HElement,
  LoginContainer,
  PlayButton,
  TrailerButton,
} from "./MovieDetails.styled";

export const MovieDetails = () => {
  const { id } = useParams();
  const { selectedmovie } = useSelector((state) => state.movies);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieById(id));
  }, [id, dispatch]);
  return (
    <div>
      <BackButton onClick={() => navigate("/movielist")} variant="contained">
        Back
      </BackButton>
      <LoginContainer>
        <img
          src={selectedmovie.Poster}
          alt={selectedmovie.movieName}
          width={700}
          height={400}
          style={{ objectFit: "contain" }}
        />
        <HElement>{selectedmovie.movieName}</HElement>
        <DivContainer>
          <PlayButton variant="contained">Play</PlayButton>
          <TrailerButton variant="contained">
            Trailer
          </TrailerButton>
        </DivContainer>
        <CardDiv>
          <h4>Release Year:{selectedmovie.YearofRelease}</h4>
          <h4>Plot:{selectedmovie.Plot}</h4>
          <h4>
            Actors:{selectedmovie.HeroName},{selectedmovie.HeroineName},
            {selectedmovie.ComedianName},{selectedmovie.villanName}
          </h4>
          <h4 style={{ width: "430px" }}>Story:{selectedmovie.Story}</h4>
          <h4>Producer:{selectedmovie.ProducerName}</h4>
        </CardDiv>
      </LoginContainer>
    </div>
  );
};
