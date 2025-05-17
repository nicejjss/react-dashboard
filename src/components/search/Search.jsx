import './Search.css';
import searchIcon from '../../assets/icons/search.svg';

function Search({ name }) {
    return (
        <form id={name + "-search"} className="search-form">
            <img id="search-icon" src={searchIcon} alt="Search Icon" />
            <input type="text" className="search-input" placeholder="Search" />
        </form>
    )
}

export default Search;