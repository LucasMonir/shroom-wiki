import style from '../css/ShroomList.module.css';
import ShroomCard from './ShroomCard'

function ShroomList({ shrooms, title, subtitle }) {

    return (
        <section className={style.shroom_container}>
            <div className={style.title}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
            <div className={style.card_container}>
                {shrooms && (
                    shrooms.map((x, i) => <ShroomCard title={x.name} key={i} description={x.description} img={x.img} />)
                )}
            </div>
        </section>
    );
}
 
export default ShroomList;