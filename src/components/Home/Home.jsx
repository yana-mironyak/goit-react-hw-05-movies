import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPopularMovies } from 'helpers/fechMovies';
import css from '../Home/Home.module.css';


const HomePage = () => {
    const location = useLocation();
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        const getPopularMovies = async () => {
            const response = await fetchPopularMovies();
            setPopularMovies(response.results)
        }
        getPopularMovies();
    }, [])
    
    return (
        <div>
            <ul className={css.main__list}>
                {popularMovies.map(({ title, id }) => <li key={id} className={css.list__item}><Link to={`/movies/${id}`} state={{from: location} } className={css.list__link} id={id}>{title}</Link></li>)}
            </ul>
        </div>
    )
}

export default HomePage;