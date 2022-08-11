import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'helpers/fechMovies';
import css from '../Reviews/Reviews.module.css';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getMovieReviews = async () => {
            const response = await fetchMovieReviews(movieId);
            setReviews(response.results)
        }
        getMovieReviews() 
    }, [movieId])

    return (
        <div className={css.reviews}>
            {reviews.length === 0 && <p className={css.reviews__error}>We don`t have any reviews for this movie</p>}
            <ul>
                {reviews.map(({ id, author, content }) => {
                    return (
                        <li key={id} className={css.list__item}>
                            <h3 className={css.list__title}>Author: {author}</h3>
                            <p className={css.list__text}>{content}</p>
                        </li>
                    )
                })}  
            </ul>
        </div>   
    )
}

export default Reviews;
