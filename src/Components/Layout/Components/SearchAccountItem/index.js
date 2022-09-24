import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./SearchAccountItem.module.scss"


const cx=classNames.bind(styles)

function SearchAccountItem() {
     return (
          <div className={cx('wrapper')}>
               <img 
                    className={cx('avatar')}
                    alt="Con Chó"
                    src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
               />
               <div className={cx('info')}>
                    <h4 className={cx('name')}>
                         <span>Con Chó</span>
                         <FontAwesomeIcon icon={faCheckCircle} className={cx('icon-official')} />
                    </h4>
                    <span className={cx('username')}>Con Chó nàyyyyyyyyyyyyyyyyyyyy</span>
               </div>
          </div>
     )
}

export default SearchAccountItem;
