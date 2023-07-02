import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import style from '../css/NavBar.module.css'
import logo from '../../../img/amanita.png'

function NavBar() {
    const location = useLocation();
    const activeStyle = {color: '#8b7aff'};
    const inactiveStyle = { color: '#fff'};

    return (
        <nav className={style.navbar}>
            <Link to='/'>
                <img src={logo} alt="ShroomWiki" height='100px' />
            </Link>

            <ul className={style.list}>
                <li className={style.item}>
                    <Link to='/' style={location.pathname === '/' ? activeStyle : inactiveStyle}>Home</Link>
                </li>
                <li className={style.item}>
                    <Link to='/cool' style={location.pathname === '/cool' ? activeStyle : inactiveStyle}>Cool</Link>
                </li>
                <li className={style.item}>
                    <Link to='/edible' style={location.pathname === '/edible' ? activeStyle : inactiveStyle}>Edible</Link>
                </li>
                <li className={style.item}>
                    <Link to='/toxic' style={location.pathname === '/toxic' ? activeStyle : inactiveStyle}>Toxic</Link>
                </li>
            </ul>

        </nav>
    );
}

export default NavBar;