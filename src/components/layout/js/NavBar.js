import { Link } from 'react-router-dom';

import style from '../css/NavBar.module.css'
import logo from '../../../img/amanita.png'

function NavBar() {
    return (
        <nav className={style.navbar}>
            <Link to='/'>
                <img src={logo} alt="ShroomWiki" height='100px' />
            </Link>

            <ul className={style.list}>
                <li className={style.item}>
                    <Link to='/'>Home</Link>
                </li>
                <li className={style.item}>
                    <Link to='/cool'>Cool</Link>
                </li>
                <li className={style.item}>
                    <Link to='/edible'>Edible</Link>
                </li>
                <li className={style.item}>
                    <Link to='/toxic'>Toxic</Link>
                </li>
            </ul>

        </nav>
    );
}

export default NavBar;