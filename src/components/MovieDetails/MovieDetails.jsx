import AdditionalInfo from "components/AdditionalInfo/AdditionalInfo";
import GoBackButton from "components/GoBackButton/GoBackButton";
import { fetchMovieDetails } from "helpers/fechMovies";
import { useState, useEffect } from "react";
import { useParams,useLocation } from "react-router-dom";
import css from '../MovieDetails/MovieDetails.module.css';

const MovieDetails = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const [movie, setMovie] = useState({});
    const [movieGenres, setMovieGenres] = useState();
    const URLImage = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
    const backLinkHref = location.state?.from ?? "/";

    useEffect(() => {
        const getMovieDetails = async () => {
            const response = await fetchMovieDetails(movieId);
            setMovie(response);
            setMovieGenres(Object.values(response.genres).map(genres => genres.name).join(', '));
        }
        getMovieDetails()
    }, [movieId]);
    
    return (
        <div className={css.container}>
            <GoBackButton onGoBack={backLinkHref}/>
            <div className={css.movie}>
                {movie.poster_path && <img className={css.movie__img} src={URLImage} alt={movie.title} />}
                <div>
                    <h2>{movie.title}</h2>
                    <p>User Score: {Math.floor(movie.vote_average * 10)}%</p>
                    <h3 className={css.movie__title}>Overview</h3>
                    <p>{movie.overview}</p>
                    <h3 className={css.movie__title}>Genres</h3>
                    <p>{movieGenres}</p>
                </div>
            </div>
            <AdditionalInfo backLinkHref={backLinkHref} />
        </div>
    )
}

export default MovieDetails;

