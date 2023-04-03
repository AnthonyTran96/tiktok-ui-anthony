import { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/components/AccountItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import * as searchServices from '~/services/searchServices';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    // const [hasInput, setHasInput] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRender, setIsRender] = useState(true);
    const inputRef = useRef();

    const handleInputChange = (e) => {
        const inputChange = e.target.value;
        if (inputChange.startsWith(' ')) return;
        setSearchValue(inputChange);
        // setHasInput(true);
    };

    const handleDeleteBtn = () => {
        setSearchValue('');
        setSearchResult([]);
        // setHasInput(false);
        inputRef.current.focus();
    };

    const renderTippy = (attrs) => (
        <div className={cx('render-tippy')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <h4 className={cx('render-header')}>Account</h4>
                {searchResult.map((item) => (
                    <AccountItem data={item} key={item.id} />
                ))}
            </PopperWrapper>
        </div>
    );
    const debounceValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            setIsLoading(true);
            const data = await searchServices.search(debounceValue);
            setSearchResult(data);
            setIsLoading(false);
            setIsRender(true);
        };
        fetchApi();
    }, [debounceValue]);
    return (
        <div className={cx('wrapper')}>
            <HeadlessTippy
                visible={searchResult.length && isRender}
                render={renderTippy}
                interactive
                placement="bottom-start"
                onClickOutside={() => setIsRender(false)}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        placeholder="Search accounts and videos"
                        value={searchValue}
                        onChange={handleInputChange}
                        onClick={() => setIsRender(true)}
                    />
                    {isLoading && (
                        <div className={cx('search-loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </div>
                    )}
                    {!!searchValue.length && !isLoading && (
                        <div className={cx('search-delete')} onClick={handleDeleteBtn}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </div>
                    )}
                    <div className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
