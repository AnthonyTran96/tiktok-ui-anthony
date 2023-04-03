import HeadlessTippy from '@tippyjs/react/headless';
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

const cx = classNames.bind(styles);

function Header() {
    const renderTippy = (attrs) => (
        <div className="box" tabIndex="-1" {...attrs}>
            My tippy box
        </div>
    );

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
                    <HeadlessTippy render={renderTippy}>
                        <div className={cx('setting')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </div>
                    </HeadlessTippy>
                </div>
            </div>
        </div>
    );
}

export default Header;
