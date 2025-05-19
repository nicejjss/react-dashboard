import './Search.css';
import searchIcon from '../../assets/icons/search.svg';
import React from 'react';

const Search = React.memo(({ name, value, onChange }) => {
    return (
        <section className={`${name}-input input-search`}>
            <img id="search-icon" src={searchIcon} alt="Search Icon" />
            <input 
                type="text" 
                name={name} 
                className="search-input" 
                placeholder="Search" 
                value={value}
                onChange={onChange ? (e) => onChange(e.target.value) : undefined}
            />
        </section>
    )
});

export default Search;