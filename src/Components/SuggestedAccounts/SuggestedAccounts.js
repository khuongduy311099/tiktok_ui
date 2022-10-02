import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
const cx = classNames.bind(styles);
function SuggestedAccount({ label, visible }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <button className={cx('see-more-wrapper')}>
                <div className={cx('see-all')}>See all</div>
            </button>
        </div>
    );
}

SuggestedAccount.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SuggestedAccount;
