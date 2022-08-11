import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import css from '../GoBackButton/GoBackButton.module.css';

const GoBackButton = ({ onGoBack }) => {
    return (
        <Link to={onGoBack} className={css.goBackBtn}>Go back</Link>
    )
}

export default GoBackButton;

GoBackButton.propTypes = {
    onGoBack: PropTypes.object.isRequired,
}