import style from '../css/Mushroom.module.css'
import { useEffect, useState } from "react";

function Mushroom({ id }) {
    const [shroom, setShroom] = useState([]);

    useEffect(() => {
        if (!id) {
            fetch('http://localhost:4200/randomShroom',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },

                })
                .then(x => x.json()).then(x => console.log(x))
                .then((x) => { setShroom(x) })
                .catch(err => console.log(err))
        }
    })


    return (
        <section className={style.shroom_container}>

            <div className={style.shroom_data_container}>
                <div className={style.shroom_image}>
                    {/* <img src="https://cdn.britannica.com/90/236590-050-27422B8D/Close-up-of-mushroom-growing-on-field.jpg" alt="" /> */}
                </div>
                <div className={style.shroom_data}>
                    <h1 className={style.mushroom_name}>{shroom.name}</h1>
                    <div className={style.mushroom_items}>
                        <ul>
                            <li className={style.shroom_item}>Genus: <span className={style.mushroom_info}>{shroom.genus}</span></li>
                            <li className={style.shroom_item}>Species: <span className={style.mushroom_info}>{shroom.species}</span></li>
                            <li className={style.shroom_item}>Edible: <span className={style.mushroom_info}>No</span></li>
                            <li className={style.shroom_item}>Toxic: <span className={style.mushroom_info}>Yes</span></li>
                        </ul>

                        <p className={style.mushroom_description}>
                            Amanita muscaria,Amanita muscaria,AAmanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,manita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria,Amanita muscaria, commonly known as the fly agaric or fly amanita,[5] is a basidiomycete of the genus Amanita. It is also a muscimol mushroom.[6] Native throughout the temperate and boreal regions of the Northern Hemisphere, Amanita muscaria has been unintentionally introduced to many countries in the Southern Hemisphere, generally as a symbiont with pine and birch plantations, and is now a true cosmopolitan species. It associates with various deciduous and coniferous trees.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Mushroom;