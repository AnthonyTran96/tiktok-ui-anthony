import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return <div className={cx('wrapper')}>Header</div>;
}

Header.propTypes = {};

export default Header;
