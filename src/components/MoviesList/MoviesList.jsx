import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from '../MoviesList/MoviesList.module.css';

const MoviesList = ({ moviesList }) => {
    const location = useLocation();
    return (  
        <ul>
            {moviesList.map(({ id, title }) => {
                return (
                    <li key={id} className={css.list__item}><Link to={`/movies/${id}`} state={{from: location}} className={css.list__link}>{title}</Link></li>
                )
            })}  
        </ul>
    )
}

export default MoviesList;

MoviesList.propTypes = {
    moviesList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }))
    
}