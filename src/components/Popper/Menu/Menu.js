import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Header from './Header';
import MenuItem from './MenuItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, list }) {
    const [menuData, setMenuData] = useState([{ data: list }]);
    const renderData = menuData[menuData.length - 1];
    const handleBack = () => {
        setMenuData([{ data: list }]);
    };

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
                            }}
                        />
                    );
                })}
            </PopperWrapper>
        </div>
    );
    return (
        <HeadlessTippy interactive visible offset={[12, 8]} placement="bottom-end" render={renderTippy}>
            <div className={cx('menu-wrapper')}>{children}</div>
        </HeadlessTippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Menu;
