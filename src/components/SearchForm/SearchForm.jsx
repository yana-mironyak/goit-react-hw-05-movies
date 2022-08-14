import PropTypes from 'prop-types';
import { Formik, Form, Field } from "formik";
import css from '../SearchForm/SearchForm.module.css';

const SearchForm = ({handleSubmit, query}) => {
    return (
        <Formik initialValues={{searchFilm: query ?? ''}} onSubmit={handleSubmit}>
            <Form className={css.searchForm}>       
                <Field
                    className={css.searchFormInput}
                    type="text"
                    name='searchFilm'
                    autoComplete="off"
                    autoFocus
                    placeholder="Search film"
                />
                <button type="submit">Search</button>
            </Form>
        </Formik>
    )
}

export default SearchForm;

SearchForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
}