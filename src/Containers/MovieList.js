import React, {useState, useEffect} from 'react'
import MovieCard from '../Components/MovieCard'
import SearchBar from "material-ui-search-bar";
import NominatedMovieList from "./NominatedMovieList";

const MovieList = () => {
    const [movies, setMovies] = useState(null)
    const [search, setSearch] = useState('')
    const [nominatedMovies, setNominatedMovies] = useState([])
    const [showResults, setShowResults] = useState(false)

    const fetchMovies = (search) => {

        fetch(`https://www.omdbapi.com/?s=${search}&type=movie&apikey=${process.env.REACT_APP_MY_KEY}`)
        .then(res => res.json())
        .then(json => {
            if(json.Response === 'False'){
                console.log(json.Response)
            } else {
                setMovies(json.Search)
                setSearch('')
            }
        })
    }

    useEffect(() => {
        fetchMovies(search)
        if(nominatedMovies.length > 0){
            console.log(nominatedMovies)
            setShowResults(true)
        }
    }, [movies])
    
    const nominateMovie = (e, movie) => {
        if (nominatedMovies.length < 5){
            setNominatedMovies([...nominatedMovies, movie])
            if(showResults === false){
                setShowResults(true)
            }
        } else {
            alert("cant nominate more movies")
        }
    }

    const removeNomination = (e, movie) => {
        // const index = nominatedMovies.indexOf(movie.imdbID)
        // console.log(index)
        // nominatedMovies.splice(index, 1)
        let array = nominatedMovies.filter(n => n.imdbID !== movie.imdbID)
        setNominatedMovies(array)
    }

    return (
        <div>
            <div className="searchbar">
                <SearchBar
                    autofocus
                    value={search}
                    onChange={(newValue) => setSearch(newValue)}
                    onRequestSearch={() => {fetchMovies(search)}}
                />
            </div>
            {showResults ? <NominatedMovieList removeNomination={removeNomination} movies={nominatedMovies}/> : null}
            <div className="flex-container">
                {movies !== null ? movies.map(movie =>
                    <MovieCard key={movie.imdbID} movie={movie} nominateMovie={nominateMovie} moviesPicked={nominatedMovies}/>) 
                    : 
                    <h1 className="greeting">Type in the search bar and nominate your favorite movies!</h1>
                }
            </div>
        </div>
    )
}

export default MovieList