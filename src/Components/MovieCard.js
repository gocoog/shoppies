import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DefaultImage from '../Images/default-movie.png';

const useStyles = makeStyles({
    root: {
        width: "265px",
        height: "560px",
        margin: "20px",
        justifyContent: "space-between",
    },
  });

const MovieCard = (props) => {
    const classes = useStyles()
    const movie = props.movie
    const [moviePoster, setMoviePoster] = useState(DefaultImage)
    const [nominated, setNominated] = useState(false)

    const checkNomination = () => {
        setNominated(false)
        for(const i of props.moviesPicked){
            if (movie.imdbID === i.imdbID){
                setNominated(true)
            }
        }
    }

    const renderMoviePoster = () => {
        if(movie.Poster !== "N/A"){
            setMoviePoster(movie.Poster)
        } else {
            setMoviePoster(DefaultImage)
        }
    }
    useEffect(() => {
        renderMoviePoster()
    }, [movie])

    useEffect(() => {
        checkNomination()
    }, [props.moviesPicked])

    return (
        <div className="flex-card" >
            <Card className={classes.root}>
                <CardMedia
                    height={"400px"}
                    component="img"
                    alt={movie.Title}
                    image={moviePoster}
                    title={movie.Title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h4">
                        {movie.Title}
                    </Typography>
                    <Typography className="content" color="textSecondary" component="p">
                        {movie.Year}
                        {nominated ? 
                        <button disabled className="disabled-button">Nominated</button>
                        :
                        <button
                        className="nominate-button"
                        onClick={(e) => {
                                props.nominateMovie(e, movie)
                        }}
                        >
                        Nominate
                        </button>}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default MovieCard