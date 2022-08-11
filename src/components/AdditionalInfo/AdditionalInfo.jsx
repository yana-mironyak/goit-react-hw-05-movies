import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';
import css from '../AdditionalInfo/AdditionalInfo.module.css';

const AdditionalInfo = ({backLinkHref}) => {
    return (
        <div className={css.container}>
            <div className={css.additionalInfo}>
                <p>Additional Information</p>
                <ul>
                    <li className={css.list__item}><Link className={css.list__link} to='cast' state={{from: backLinkHref}}>Cast</Link></li>
                    <li className={css.list__item}><Link className={css.list__link} to='reviews' state={{from: backLinkHref}}>Reviews</Link></li>
                </ul>
                <Outlet />
            </div>
            
        </div>
    )
}

export default AdditionalInfo;

AdditionalInfo.propTypes = {
    backLinkHref: PropTypes.object.isRequired,
}