import React from 'react'

const MovieCard = (props) => {
    const movie = props.movie
    return (
        <div>
            {console.log(movie.Title)}
            <h1>{movie.Title}</h1>
        </div>
    )
}

export default MovieCard