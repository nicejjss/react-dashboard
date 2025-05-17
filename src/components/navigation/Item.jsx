import navArrow from '../../assets/icons/nav-arrow.svg'
import './Item.css'
import { MenuContext } from '../../Contexts';
import { useContext } from 'react';

function Item({ index, item}) {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <li className="nav-item">
      <a className="nav-item-link" href={item.link}>
        <img className={`nav-item-icon ${!isMenuOpen ? "margin-lr-auto" : ''}`} src={item.icon} alt={item.title + " Icon"} />
          <span className={`nav-item-title ${isMenuOpen ? "display-block" : "display-none"}`}>{item.title}</span>
          {index !== 0 ? <img className={`nav-item-arrow ${isMenuOpen ? "display-block" : "display-none"}`} src={navArrow} alt="Item Arrow" /> : null}
      </a>
    </li>
  )
}

export default Item;