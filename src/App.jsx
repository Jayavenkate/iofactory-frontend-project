import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MovieList } from "./component/MovieList/Movielist";
import { SignUp } from "./component/SignUp/SignUp";
import { Login } from "./component/Login/Login";

import { MovieDetails } from "./component/MovieDetails/MovieDetails";
import { EditMovie } from "./component/EditMovie/EditMovie";
import { AddMovie } from "./component/AddMovie/AddMovie";

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
