import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Image
                fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                className={cx('avatar')}
                src={data.avatar}
                alt={data.avatar}
            />
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <span className={cx('full-name')}>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('tick')} icon={faCircleCheck} />}
                </div>
                <div className={cx('nickname')}>{data.nickname}</div>
            </div>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
