import PropTypes from 'prop-types';
import Button from '~/components/Button/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ data, ...passProps }) {
    return (
        <Button className={cx('menu-item')} to={data.to} leftIcon={data.icon} {...passProps}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default MenuItem;
