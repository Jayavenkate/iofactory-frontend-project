import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MovieList } from "./component/Movielist";
import { SignUp } from "./component/SignUp";
import { Login } from "./component/Login";
import { AddMovie } from "./component/AddMovie";
import { MovieDetails } from "./component/MovieDetails";
import { EditMovie } from "./component/EditMovie";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/movielist" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/edit/:id" element={<EditMovie />} />
      </Routes>

    </div>
  );
}

export default App;
