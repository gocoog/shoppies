import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 250,
        maxHeight: "auto",
        margin: '30px',
    },
  });

const MovieCard = (props) => {
    const classes = useStyles()
    const movie = props.movie

    return (
        <div className="flex-card" >
            {console.log(movie.Title)}
            <Card className={classes.root}>
                <CardMedia
                    component="img"
                    alt={movie.Title}
                    image={movie.Poster}
                    title={movie.Title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {movie.Title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {movie.Year}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                    Nominate
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default MovieCard