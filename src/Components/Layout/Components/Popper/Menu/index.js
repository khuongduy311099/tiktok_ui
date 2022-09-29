import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';
import styles from './menu.module.scss';
import { Wrapper as PopperWrapper } from '~/Components/Layout/Components/Popper';
import MenuItem from './MenuItem';
import { useState } from 'react';
import Header from './Header';
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
    return (
        <Tippy
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('content')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory(history.slice(0, history.length - 1));
                                }}
                            />
                        )}
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
            placement="bottom-end"
            interactive="true"
            delay={[0, 800]}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
            offset={[15, 15]}
            hideOnClick={hideOnClick}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
