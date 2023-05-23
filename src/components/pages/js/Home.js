import style from '../css/Home.module.css'
import shroom from '../../../img/Shroom.svg'
import LinkButton from '../../layout/js/LinkButton';

function Home() {
    return (
        <section className={style.home_container}>
            <h1>
                Welcome to <span>ShroomWiki!</span>
            </h1>
            <p>Explore the Fungi!</p>
            <LinkButton to='/cool' text='Get to know some cool mushrooms :)'></LinkButton>
            <img src={shroom} alt="mushroom" />
        </section>
    );
}

export default Home;