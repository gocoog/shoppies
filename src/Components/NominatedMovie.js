import React from 'react'

const NominatedMovie = (props) => {
    const movie = props.movie

    return(
        <div>
            <h1 className="list">{movie.Title}</h1>
            <button className="nominate-button" onClick={(e) => props.removeNomination(e, movie)}>remove from list</button>
        </div>
    )
}

export default NominatedMovie