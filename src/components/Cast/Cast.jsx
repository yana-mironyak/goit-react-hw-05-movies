import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'helpers/fechMovies';
import css from '../Cast/Cast.module.css';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    
    useEffect(() => {
        const getMovieCredits = async () => {
            const response = await fetchMovieCredits(movieId);
            setCast(response.cast)
        }
        getMovieCredits() 
    }, [movieId])

    return (  
        <div className={css.cast}>
            {<ul>
                {cast.map(({ id, profile_path, name, character }) => {
                    const actorImg = `https://image.tmdb.org/t/p/w300/${profile_path}`;
                    return (
                        <li className={css.list__item} key={id}>
                           {profile_path && <img className={css.list__img} src={actorImg} alt={name}></img>}
                            <p>{name}</p>
                            <p className={css.list__text}>Character: {character}</p>
                        </li>
                    )
                })}  
            </ul>}
        </div>
        
    )
}

export default Cast;
