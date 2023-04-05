import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Header from './Header';
import MenuItem from './MenuItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, list = [], hideOnClick = false, onChange = defaultFn }) {
    const [menuData, setMenuData] = useState([{ data: list }]);
    const renderData = menuData[menuData.length - 1];
    const handleBack = () => {
        setMenuData((prev) => prev.slice(0, prev.length - 1));
    };
    const handleHideMenu = () => {
        setMenuData((prev) => prev.slice(0, 1));
    };

    const handleMenuClick = () => {};

    const renderTippy = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-render')}>
                {menuData.length > 1 && <Header title={renderData.title} onBack={handleBack} />}
                {renderData.data.map((item, index) => {
                    return (
                        <MenuItem
                            key={index}
                            data={item}
                            onClick={() => {
                                if (item.children) setMenuData((prev) => [...prev, item.children]);
                                else onChange(item);
                            }}
                        />
                    );
                })}
            </PopperWrapper>
        </div>
    );
    return (
        <HeadlessTippy
            interactive
            hideOnClick={hideOnClick}
            delay={[0, 400]}
            onHide={handleHideMenu}
            offset={[12, 8]}
            placement="bottom-end"
            render={renderTippy}
        >
            <div className={cx('menu-wrapper')} onClick={handleMenuClick}>
                {children}
            </div>
        </HeadlessTippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    list: PropTypes.array.isRequired,
};

export default Menu;
