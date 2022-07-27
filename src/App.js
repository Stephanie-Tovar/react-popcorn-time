import './App.css';
import moviesArray from "./data/movies.json"
import { useState } from "react"
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {

  const [movies, setMovies] = useState(moviesArray)

  const deleteMovie = (movieId) => {
    setMovies((prevMovies) => {
      const newList = prevMovies.filter(element => {
        return element.id !== movieId;
      })
      return newList;
    })
  }

  return (
    <div >
      <Header numberOfMovies={movies.length} />
      <Main movies={movies} delete={deleteMovie} />
      <Footer />
    </div>
  );
}

export default App;
