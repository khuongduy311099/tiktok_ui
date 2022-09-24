import Button from "~/Components/Button";
import classNames from 'classnames/bind'
import styles from './menu.module.scss'

const cx = classNames.bind(styles)
function MenuItem({data, onClick}) {
     return (
          <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} href={data.href} onClick={onClick}>{data.title}</Button>
     ); 
}

export default MenuItem;