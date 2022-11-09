import './App.css';
import {Routes, Route} from "react-router-dom"
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
   <div>
    <Routes>
      <Route path="/movies" element={<MovieList/>} />
      <Route path="/movies/:id" element={<MovieDetails/>} />
    </Routes>
   </div>
  );
}

export default App;
