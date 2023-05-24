import ShroomCard from "../../layout/js/ShroomCard";
import style from '../css/Toxic.module.css';

function Toxic() {
    const shroomList =
        [
            { title: 'Amanita phalloides', subtitle: 'Amanita phalloides, commonly known as the death cap, is a deadly poisonous basidiomycete fungus, one of many in the genus Amanita.', img: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSjfmn3dnqwqbz-trVZPIF4nX9SIVKGJxa0wfVjQ1CJAx9-zUmHuEXmvMKdhfI4veqUrzFxce1MhFjEkLA' },
            { title: 'Amanita phanterina', subtitle: 'Amanita pantherina, also known as the panther cap, false blusher, and the panther amanita due to its similarity to the true blusher, is a species of fungus found in Europe and Western Asia', img: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcS2jPfF9E740FTgearAS0JLauc6sn_nPleiKl4Yg56krHxH5-K94dsnxx4xj8FEa8YdQxGhcKqUWsAFYz4' },
            { title: 'Amanita muscaria', subtitle: 'Amanita muscaria, commonly known as the fly agaric or fly amanita, is a basidiomycete of the genus Amanita. It is also a muscimol mushroom.', img: 'https://www.naturezadivina.com.br/media/amasty/blog/amanita-muscaria.jpg' },
            { title: 'Amanita roseolamellata', subtitle: 'This species is a readily recognisable Amanita with few collections. The habitat of this species is highly fragmented and in decline. Many of these areas are small patches of forest surrounded by urban or agricultural land, with recent (within the last few decades) severe decline in forest extent and increasing pressure for urban development.', img: 'http://www.amanitaceae.org/image/uploaded/r/roseolam139307_web.jpg' },
        ]
    return (
        <section className={style.toxic_container}>
            <div className={style.title}>
                <h1>Beware! These are Toxic mushrooms!</h1>
                <p>We listed species that we consider dangerous, so please avoid messing with these little guys!</p>
            </div>
            <div className={style.card_container}>
                {shroomList && (
                    shroomList.map((x, i) => <ShroomCard title={x.title} key={i} subtitle={x.subtitle} img={x.img} />)
                )}
            </div>
        </section>

    );
}

export default Toxic;