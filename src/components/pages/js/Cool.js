import ShroomCard from "../../layout/js/ShroomCard";
import style from '../css/Cool.module.css';
function Cool() {
    const shroomList =
        [
            { title: 'Amanita phalloides', subtitle: '', img: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSjfmn3dnqwqbz-trVZPIF4nX9SIVKGJxa0wfVjQ1CJAx9-zUmHuEXmvMKdhfI4veqUrzFxce1MhFjEkLA' },
            { title: 'Amanita phanterina', subtitle: '', img: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcS2jPfF9E740FTgearAS0JLauc6sn_nPleiKl4Yg56krHxH5-K94dsnxx4xj8FEa8YdQxGhcKqUWsAFYz4' },
            { title: 'Amanita muscaria', subtitle: '', img: 'https://www.naturezadivina.com.br/media/amasty/blog/amanita-muscaria.jpg' },
            { title: 'Amanita roseolamellata', subtitle: '', img: 'http://www.amanitaceae.org/image/uploaded/r/roseolam139307_web.jpg' },
    ]
    return (
        <section className={style.cool_container}>
            <div className={style.title}>
                <h1>Here are some cool mushrooms!</h1>
                <p>Cool looking fungus to brighten your day...</p>
            </div>
            <div className={style.card_container}>
                {shroomList && (
                    shroomList.map((x) => <ShroomCard title={x.title} subtitle={x.subtitle} img={x.img}/> )
    )}
                {/* <ShroomCard className={style.card} title='amanita phalloide' subtitle='a white little fella, but poisonous as Hell!' img='https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSjfmn3dnqwqbz-trVZPIF4nX9SIVKGJxa0wfVjQ1CJAx9-zUmHuEXmvMKdhfI4veqUrzFxce1MhFjEkLA'></ShroomCard>
                <ShroomCard title='amanita phalloides' subtitle='a white little fella, but poisonous as Hell!' img='https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSjfmn3dnqwqbz-trVZPIF4nX9SIVKGJxa0wfVjQ1CJAx9-zUmHuEXmvMKdhfI4veqUrzFxce1MhFjEkLA'></ShroomCard>
                <ShroomCard title='amanita phalloides' subtitle='a white little fella, but poisonous as Hell!' img='https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSjfmn3dnqwqbz-trVZPIF4nX9SIVKGJxa0wfVjQ1CJAx9-zUmHuEXmvMKdhfI4veqUrzFxce1MhFjEkLA'></ShroomCard>
                <ShroomCard title='amanita phalloides' subtitle='a white little fella, but poisonous as Hell!' img='https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSjfmn3dnqwqbz-trVZPIF4nX9SIVKGJxa0wfVjQ1CJAx9-zUmHuEXmvMKdhfI4veqUrzFxce1MhFjEkLA'></ShroomCard> */}
            </div>
        </section>

    );
}

export default Cool;