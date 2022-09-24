//react
import { useState,useEffect, Fragment } from 'react';
// import ReactDom from 'react-dom';
//Tippy react lib
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
//component
import { Wrapper as PopperWrapper } from '../Popper'
//css
import classNames from 'classnames/bind'
import styles from './header.module.scss'
//img
import images from '~/assets/image'
//Font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus, faEllipsisV, faEarthAsia, faQuestionCircle, faKeyboard, faUpload, faCloudUpload, faMessage, faInbox, faSms, faUser, faGear, faSign, faSignOut } from '@fortawesome/free-solid-svg-icons'
//import component
import  SearchAccountItem  from "../SearchAccountItem"
import Button from "~/Components/Button";
import Menu from "~/Components/Layout/Components/Popper/Menu"
import MenuItem from '../Popper/Menu/MenuItem';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
//đặt biến
const cx = classNames.bind(styles)

const MENU_ITEMS = [
     {
          icon: <FontAwesomeIcon icon={faEarthAsia} />,
          title: 'English',
          children:{
               title: 'Language',
               data: [
                    {
                         type: 'language',
                         code: 'vi',
                         title: 'Tiếng Việt'
                    },
                    {
                         type: 'language',
                         code: 'en',
                         title: 'English'
                    },
                    {
                         type: 'language',
                         code: 'esp',
                         title: 'Español'
                    },
                    {
                         type: 'language',
                         code: 'frc',
                         title: 'Le français'
                    }
               ]
          }
     },
     {
          icon: <FontAwesomeIcon icon={faQuestionCircle} />,
          title: 'Feedback and help',
          to: '/feedback'
     },
     {
          icon: <FontAwesomeIcon icon={faKeyboard} />,
          title: 'Keyboard shortcut',
     },

]


// demo có user.

const currentUser = true
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
     },
]

function Header() {

     const [searchResult, setSearchResult] = useState([]);
     //handle logic menu change
     const handleMenuChange = (menuItem) => {
          switch (menuItem.type) {
               case 'language':
                    console.log('handle change language');
                    break;
               default:
                    console.log('default');
          }
     }
     return (
          <header className={cx('wrapper')}>
               <div className={cx('inner')}>
                   <div className={cx('logo')}>
                         <img src={images.logo} alt='Tiktok'/>
                   </div>                   
                   <HeadlessTippy
                         render={attrs => (
                              <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                   <PopperWrapper>
                                        <h4 className={cx('search-label')}>
                                             Accounts
                                        </h4>
                                        <SearchAccountItem />
                                        <SearchAccountItem />
                                        <SearchAccountItem />
                                        <SearchAccountItem />
                                   </PopperWrapper>
                              </div>     
                              )} 
                         visible={searchResult.length > 0} 
                         interactive='true'
                   >
                              <div className={cx('search')}>
                                   <input placeholder='Search accounts and videos' spellCheck='false'/>
                                   <button className={cx('clear')}>
                                        <FontAwesomeIcon icon={faCircleXmark} />
                                   </button>
                                   <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                                   <button className={cx('search-btn')}>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                   </button>
                              </div>
                    </HeadlessTippy>
                              <div className={cx('action')}>
                                   {currentUser ? 
                                        <Fragment>
                                             <Button blackwhite leftIcon={<FontAwesomeIcon icon={faPlus}/>}>
                                                  <span>Upload</span>
                                             </Button>
                                             <Tippy
                                                  content='Messages'
                                             >
                                                  <button className={cx('action-btn')} >
                                                       <FontAwesomeIcon icon={faMessage} />
                                                  </button>
                                             </Tippy>
                                             <Tippy
                                                  content='Inbox'
                                                  delay={[0, 300]}   
                                             >
                                                  <button className={cx('action-btn')} >
                                                       <FontAwesomeIcon icon={faSms} />
                                                  </button>
                                             </Tippy>
                                        </Fragment>
                                        :<Fragment>
                                             <Button blackwhite leftIcon={<FontAwesomeIcon icon={faPlus}/>}>
                                                  <span>Upload</span>
                                             </Button>
                                             <Button primary>Login</Button>
                                        </Fragment>}
                                             <Menu
                                                  items={currentUser ? USER_MENU : MENU_ITEMS}
                                                  onChange={handleMenuChange}
                                             > 
                                                  {currentUser ? (
                                                       <img 
                                                            className={cx('user-avatar')}
                                                            alt="Con Chó"
                                                            src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
                                                       />) :
                                                       (<button className={cx('action-icon')}>
                                                            <FontAwesomeIcon icon={faEllipsisV}/>
                                                       </button>)}
                                             </Menu>
                              </div>
               </div>
          </header>
          
     )
}

export default Header;