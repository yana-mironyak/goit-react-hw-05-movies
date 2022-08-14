import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchSearchFilm } from 'helpers/fechMovies';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import css from '../Movies/Movies.module.css';

const Movies = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');

    const handleSubmit = ({ searchFilm }) => {
        if (query === searchFilm) {
            Notiflix.Notify.success('You already find it :)')
        }
        setSearchParams({ query: searchFilm });
    }

    useEffect(() => {
        if (!query)
            return;

        const getSearchFilm = async () => {
            const response = await fetchSearchFilm(query);

            if (response.results.length === 0) {
                Notiflix.Notify.failure('We don`t have this movie')
            }

            setMoviesList(response.results)
        }
        getSearchFilm()
    }, [query])

    return (
        <div className={css.movies}>
            <div>
                <SearchForm handleSubmit={handleSubmit} query={query} />
            </div>
            {query && <MoviesList moviesList={moviesList} />}

        </div>
    )
}

export default Movies;