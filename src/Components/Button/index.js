import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function Button({
    to,
    primary = false,
    outline = false,
    small = false,
    href,
    children,
    blackwhite = false,
    rounded = false,
    disabled = false,
    onClick,
    leftIcon,
    rightIcon,
    large = false,
    className,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    // remove event listener when button's disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        blackwhite,
        disabled,
        leftIcon,
        rightIcon,
        rounded,
    });

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    primary: PropTypes.string,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    href: PropTypes.bool,
    children: PropTypes.node,
    blackwhite: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    large: PropTypes.bool,
    className: PropTypes.string,
};
export default Button;
