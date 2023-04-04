import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Search from '~/layouts/components/Search';
import Button from '~/components/Button';
import Image from '~/components/Image';
import config from '~/config';
import { menuList } from '~/components/MenuList';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <Link to={config.routes.root} className={cx('logo')}>
                    <Image src={images.logo} alt="logo" />
                </Link>

                {/* search */}
                <Search />

                {/* actions */}
                <div className={cx('actions')}>
                    <Button light to="/following">
                        Upload
                    </Button>
                    <Button
                        primary
                        className={cx('login-btn')}
                        href="https://app.axieinfinity.com/"
                        leftIcon={<FontAwesomeIcon icon={faRightToBracket} />}
                    >
                        Log in
                    </Button>

                    <Menu list={menuList.USER_MENU}>
                        <div className={cx('setting')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </div>
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
