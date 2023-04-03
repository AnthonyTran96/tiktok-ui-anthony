import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Wrapper({ children, className }) {
    // eslint-disable-next-line no-undef
    const classes = cx('wrapper', className);
    return <div className={classes}>{children}</div>;
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Wrapper;
