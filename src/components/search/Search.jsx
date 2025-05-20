import './Search.css';
import searchIcon from '../../assets/icons/search.svg';

const Search = ({ name, onChange }) => {

    return (
        <section className={`${name}-input input-search`}>
            <img id="search-icon" src={searchIcon} alt="Search Icon" />
            <input 
                type="text" 
                name={name} 
                className="search-input" 
                placeholder="Search" 
                onChange={onChange ? (e) => onChange(e.target.value) : undefined}
            />
        </section>
    )
};

export default Search;