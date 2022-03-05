import {useState, useEffect} from 'react'
import MovieCard  from "../MovieCard/MovieCard";
import './Search.css';
const Search = () => {
    const [searchTerms, setSearchTerms] = useState("");
    const [movies, setMovies] = useState([])
    const SearchMovies = async (title) =>{
        let response = await fetch(`http://www.omdbapi.com/?apikey=907f9fca&s=${title}`);
        let data = await response.json();
        setMovies(data.Search);
    }
    useEffect(()=>{
        SearchMovies('batman');
    },[])

  return (
  <>
      <div className="container text-center  movies-wrapper ">
        <h1 >Movies World</h1>
        <div className="search">
            <input type="search" value={searchTerms} onChange={(e)=>{setSearchTerms(e.target.value)}} id='search' placeholder='Search Movies' />
            <button onClick={()=>{SearchMovies(searchTerms)}}>Search</button>
        </div>
    </div>
    <MovieCard  movieArr={movies} />
  </>
  )
}
export default Search;