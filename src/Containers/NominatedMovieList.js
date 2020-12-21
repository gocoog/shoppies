import React from 'react'
import NominatedMovie from '../Components/NominatedMovie'

const NominatedMovieList = (props) => {
    return (
        <div className="list-div">
            <h1 className="nominated-title">Nominated Movies:</h1>
            {props.movies.map(movie => 
            <NominatedMovie key={movie.imdbID} movie={movie} removeNomination={props.removeNomination}/>
            )}
        </div>
    )
}

export default NominatedMovieList