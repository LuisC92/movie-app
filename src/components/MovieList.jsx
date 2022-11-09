import axios from 'axios'
import React, {useState, useEffect} from 'react'
import MovieCard from "./MovieCard"
import AddMovie from "./AddMovie"


const MovieList = () => {
    //* create state to store the movies
    const [movies, setMovies] = useState([])

    //* create movie handler for fetching movies
    const fetchMovies = () => {
        axios.get("/movies").then(response => setMovies(response.data))
    }

    const handleSubmit = (event, newMovie) => {
      event.preventDefault()
      axios.post("/movies", newMovie)
        .then(response => fetchMovies())
    }

    //* use useEffect to fetch movies on mounting
    useEffect(()=>{
        fetchMovies()
    },[])

  return (
    <div>
        <h1>Movie List</h1>
        <br/>
        <AddMovie handleSubmit={handleSubmit} />
        <br/>
        {movies ? movies.map(movie => <div key={movie.id}><MovieCard {...movie} /></div>): null}
    </div>
  )
}

export default MovieList