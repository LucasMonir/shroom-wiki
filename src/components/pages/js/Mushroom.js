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
                .then(x => x.json())
                .then((x) => { setShroom(x)})
                .catch(err => console.log(err))
        }
    }, [])

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
                            {  shroom.description}
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Mushroom;