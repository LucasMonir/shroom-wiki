import style from './Footer.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

function Footer() {
    return (
        <footer className={style.footer}>
            <ul className={style.social_list}>
                <li >
                    <FaLinkedin />
                </li>
                <li>
                    <FaGithub />
                </li>
                <li>
                    <FaInstagram />
                </li>
            </ul>
            <p className={style.copy}><span>ShroomWiki</span> &copy; 2023</p>
        </footer>
    );
}


export default Footer;