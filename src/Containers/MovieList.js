import React, {useState, useEffect} from 'react'
import MovieCard from '../Components/MovieCard'
import SearchBar from "material-ui-search-bar";

const MovieList = () => {
    const [movies, setMovies] = useState(null)
    const [search, setSearch] = useState('')

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
    }, [])

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
            <div className="flex-container">
                {movies !== null ? movies.map(movie =>
                    <MovieCard movie={movie} />) 
                    : 
                    <h1>Type in the search bar and nominate your favorite movies!</h1>
                }
            </div>
        </div>
    )
}

export default MovieList