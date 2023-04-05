import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Search from '~/layouts/components/Search';
import Button from '~/components/Button';
import Image from '~/components/Image';
import config from '~/config';
import { menuList } from '~/components/MenuList';
import Menu from '~/components/Popper/Menu';
import { UploadIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Header() {
    const userLogin = true;
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
                    {userLogin ? (
                        <Tippy content="Upload video" className={cx('tippy')}>
                            <div className={cx('upload-action')}>
                                <UploadIcon className={cx('login-upload')} />
                            </div>
                        </Tippy>
                    ) : (
                        <>
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
                        </>
                    )}

                    <Menu list={userLogin ? menuList.USER_MENU : menuList.MENU_ITEMS}>
                        {userLogin ? (
                            <Image
                                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/627fe721-846f-4f75-ac61-111ca00b27dd/daqj0nl-c26a7f4f-d9fd-4e51-bca4-c1d80cfca8ef.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYyN2ZlNzIxLTg0NmYtNGY3NS1hYzYxLTExMWNhMDBiMjdkZFwvZGFxajBubC1jMjZhN2Y0Zi1kOWZkLTRlNTEtYmNhNC1jMWQ4MGNmY2E4ZWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lCdGVlq7flrU5TKVn4LuwoUt5qzag1YiqbjoBv5kid8"
                                alt="Yugioh"
                                className={cx('user-avatar')}
                            />
                        ) : (
                            <div className={cx('setting')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </div>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
