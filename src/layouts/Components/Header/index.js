//react
import { Fragment } from 'react';
// import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
//Tippy react lib
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
//proptype lib
import PropType from 'prop-types';
//css
import classNames from 'classnames/bind';
import styles from './header.module.scss';
//img
import images from '~/assets/image';
//Font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisV,
    faEarthAsia,
    faQuestionCircle,
    faKeyboard,
    faUser,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
//import component
import Button from '~/Components/Button';
import Menu from '../Popper/Menu/index';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { InboxIcon, MessagesIcon } from '~/Components/Icons';
import Image from '../Images';
import Search from '../Search';
//config routes
import config from '~/Routes/index';
//đặt biến
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'esp',
                    title: 'Español',
                },
                {
                    type: 'language',
                    code: 'frc',
                    title: 'Le français',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'esp',
                    title: 'Español',
                },
                {
                    type: 'language',
                    code: 'frc',
                    title: 'Le français',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'esp',
                    title: 'Español',
                },
                {
                    type: 'language',
                    code: 'frc',
                    title: 'Le français',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'esp',
                    title: 'Español',
                },
                {
                    type: 'language',
                    code: 'frc',
                    title: 'Le français',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'esp',
                    title: 'Español',
                },
                {
                    type: 'language',
                    code: 'frc',
                    title: 'Le français',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'esp',
                    title: 'Español',
                },
                {
                    type: 'language',
                    code: 'frc',
                    title: 'Le français',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'esp',
                    title: 'Español',
                },
                {
                    type: 'language',
                    code: 'frc',
                    title: 'Le français',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'esp',
                    title: 'Español',
                },
                {
                    type: 'language',
                    code: 'frc',
                    title: 'Le français',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'esp',
                    title: 'Español',
                },
                {
                    type: 'language',
                    code: 'frc',
                    title: 'Le français',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'esp',
                    title: 'Español',
                },
                {
                    type: 'language',
                    code: 'frc',
                    title: 'Le français',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'esp',
                    title: 'Español',
                },
                {
                    type: 'language',
                    code: 'frc',
                    title: 'Le français',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut',
    },
];

// demo có user.

const currentUser = true;
const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
    },
    {
        icon: <FontAwesomeIcon icon={faTiktok} />,
        title: 'Get coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} className={cx('sign-out')} />,
        title: 'Log out',
        separate: true,
    },
];

function Header() {
    //handle logic menu change
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log('handle change language');
                break;
            default:
                console.log('default');
        }
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>
                <Search />
                <div className={cx('action')}>
                    {currentUser ? (
                        <Fragment>
                            <Button blackwhite leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                <span>Upload</span>
                            </Button>
                            <Tippy content="Messages">
                                <button className={cx('action-btn')}>
                                    <MessagesIcon className={cx('icon-components', 'messages')} />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" delay={[0, 300]}>
                                <button className={cx('action-btn')}>
                                    <InboxIcon className={cx('icon-components', 'inbox')} />
                                </button>
                            </Tippy>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Button blackwhite leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                <span>Upload</span>
                            </Button>
                            <Button primary>Login</Button>
                        </Fragment>
                    )}
                    <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt="Con Chó"
                                src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
                            />
                        ) : (
                            <button className={cx('action-icon')}>
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
