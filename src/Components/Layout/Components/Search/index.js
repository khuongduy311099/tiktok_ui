import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './search.module.scss';
import { Wrapper as PopperWrapper } from '../Popper';
import { useState, useRef, useEffect } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import SearchAccountItem from '../SearchAccountItem';
import { useDebounce } from '~/Hooks';
import * as searchServices from '~/Api-services/searchServices';
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setloading] = useState(false);

    const debounced = useDebounce(searchValue, 600);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setloading(true);

            const result = await searchServices.search(debounced);
            setSearchResult(result);

            setloading(false);
        };
        fetchApi();
    }, [debounced]);

    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleClear = () => {
        setSearchResult([]);
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        const inputSearchValue = e.target.value;
        if (!inputSearchValue.startsWith('  ')) {
            setSearchValue(inputSearchValue);
        }
    };

    return (
        //tippy warning nên sử dụng span để làm thẻ cha
        <span>
            <HeadlessTippy
                appendTo={() => document.body}
                visible={showResult && searchResult.length > 0}
                interactive="true"
                onClickOutside={handleHideResult}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-label')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <SearchAccountItem data={result} key={result.id} onClick={handleClear} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck="false"
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </span>
    );
}

export default Search;
