import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './SearchAccountItem.module.scss';
import Image from '../Images';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function SearchAccountItem({ data, onClick }) {
    return (
        <Link className={cx('wrapper')} to={`/@${data.nickname}`} onClick={onClick}>
            <Image className={cx('avatar')} alt={data.full_name} src={data.avatar} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('icon-official')} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

SearchAccountItem.propTypes = {
    data: PropTypes.object,
};
export default SearchAccountItem;
