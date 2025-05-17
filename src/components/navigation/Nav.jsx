import Item from './Item';
import navigations from '../../assets/navigations.json';
import './nav.css';

function Nav() {
  return (
    <nav id="nav">
      <ul id="nav-list" type="none">
        {navigations.navigations.map((item, index) => (
          <Item key={"item-"+index} index={index} item={item}/>
        ))}
      </ul>
    </nav>
  )
}

export default Nav;