import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    children,
    to,
    href,
    leftIcon,
    rightIcon,
    primary = false,
    light = false,
    disable = false,
    round = false,
    large = false,
    className,
    ...passProps
}) {
    const props = { ...passProps };
    const classes = cx('wrapper', {
        primary,
        light,
        disable,
        round,
        large,
        [className]: className,
    });
    let Button = 'button';
    if (href) {
        Button = 'a';
        props.href = href;
    }
    if (to) {
        Button = Link;
        props.to = to;
    }
    return (
        <Button className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('content')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Button>
    );
}

Button.propType = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    leftIcon: PropTypes.node.isRequired,
    rightIcon: PropTypes.node.isRequired,
    primary: PropTypes.string,
    light: PropTypes.bool,
    disable: PropTypes.bool,
    round: PropTypes.bool,
    large: PropTypes.bool,
    className: PropTypes.string,
};

export default Button;
