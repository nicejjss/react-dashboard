import navArrow from '../../assets/icons/nav-arrow.svg'
import './Item.css'
import { MenuContext } from '../../Contexts';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

function Item({ index, item}) {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <li className="nav-item">
      <NavLink className="nav-item-link" to={item.link}>
        <img className={`nav-item-icon ${!isMenuOpen ? "margin-lr-auto" : ''}`} src={item.icon} alt={item.title + " Icon"} />
          <span className={`nav-item-title ${isMenuOpen ? "display-block" : "display-none"}`}>{item.title}</span>
          {index !== 0 ? <img className={`nav-item-arrow ${isMenuOpen ? "display-block" : "display-none"}`} src={navArrow} alt="Item Arrow" /> : null}
      </NavLink>
    </li>
  )
}

export default Item;