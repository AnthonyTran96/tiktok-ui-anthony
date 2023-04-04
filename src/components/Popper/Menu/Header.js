import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <div className={cx('menu-title')}>
            <div className={cx('header-back')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <h4 className={cx('header-title')} onClick={onBack}>
                English
            </h4>
        </div>
    );
}

export default Header;
