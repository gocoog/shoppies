import React, {useState, useEffect} from 'react'
import MovieCard from '../Components/MovieCard'
import SearchBar from "material-ui-search-bar";

const MovieList = () => {
    const [movies, setMovies] = useState(null)
    const [search, setSearch] = useState('finding nemo')
    const [value, setValue] = useState('')
    const fetchMovies = () =>{
        fetch(`http://www.omdbapi.com/?s=${search}&type=movie&apikey=${process.env.REACT_APP_MY_KEY}`)
        .then(res => res.json())
        .then(json => {
            if(json.Response === 'False'){
                console.log(json.Response)
            } else {
                setMovies(json.Search)
            }
        })
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <div>
            <SearchBar
                value={value}
                onChange={(newValue) => setValue(newValue)}
                // onRequestSearch={() => doSomethingWith(this.state.value)}
            />
            {console.log(movies)}
            {movies !== null ? movies.map(movie => <MovieCard movie={movie} />) : <h1>null</h1>}
        </div>
    )
}

export default MovieList