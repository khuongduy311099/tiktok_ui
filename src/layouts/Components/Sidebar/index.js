import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/Routes';
import { Menu, MenuItem } from './Menu';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    LiveActiveIcon,
    UserGroupActiveIcon,
} from '~/Components/Icons';
import SuggestedAccount from '~/Components/SuggestedAccounts';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} to={config.routes.home} />
                <MenuItem
                    title="Following"
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                    to={config.routes.following}
                />
                <MenuItem title="LIVE" icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} to={config.routes.live} />
            </Menu>
            <SuggestedAccount label="Suggested Accounts" />
            <SuggestedAccount label="Following Accounts" />
        </aside>
    );
}

export default Sidebar;
