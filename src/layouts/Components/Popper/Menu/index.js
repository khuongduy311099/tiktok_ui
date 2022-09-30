import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';
import styles from './menu.module.scss';
import { Wrapper as PopperWrapper } from '~/layouts/Components/Popper';
import MenuItem from './MenuItem';
import { useState } from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function Menu({ children, items = [], onChange = () => {}, hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    const renderResult = (attrs) => (
        <div className={cx('content')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('content')}>
                {history.length > 1 && (
                    <Header
                        title={current.title}
                        onBack={() => {
                            setHistory(history.slice(0, history.length - 1));
                        }}
                    />
                )}
                <div className={cx('menu-body')}>{renderItem()}</div>
            </PopperWrapper>
        </div>
    );

    const handleResetToFirstMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            placement="bottom-end"
            interactive
            delay={[0, 800]}
            onHide={handleResetToFirstMenu}
            offset={[15, 15]}
            hideOnClick={hideOnClick}
            render={renderResult}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
