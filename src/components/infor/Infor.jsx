import './Infor.css'
import { MenuContext } from '../../Contexts';
import { useContext } from 'react';

function Infor() {
  const { isMenuOpen} = useContext(MenuContext);

  return (
    <section id="infor">
      <img id="infor-img" className={`${!isMenuOpen ? "margin-lr-auto" : ''}`} src="./src/assets/avatar/avatar.png" alt="Infor Icon" />
      <section id="infor-infor" className={`no-break ${isMenuOpen ? "display-block" : "display-none"}`}>
        <span id="infor-infor-name">Loc Dao</span>
        <br />
        <span id="infor-infor-role">Frontend Developer</span>
      </section>
      <img id="infor-arrow" className={`arrow ${isMenuOpen ? "display-block" : "display-none"}`} src="./src/assets/icons/down-arrow.svg" alt="User Arrow"></img>
    </section>
  )
}

export default Infor;