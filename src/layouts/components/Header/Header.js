import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Search from '~/layouts/components/Search';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </div>

                {/* search */}
                <Search />

                {/* actions */}
                <div className="actions">actions</div>
            </div>
        </div>
    );
}

export default Header;
