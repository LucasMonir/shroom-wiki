import style from '../css/Mushroom.module.css'
import { useEffect, useState } from "react";
import { FaApple, FaBiohazard, FaSkull } from 'react-icons/fa'
import { BiErrorAlt } from 'react-icons/bi'

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
                .then((x) => { setShroom(x) })
                .catch(err => console.log(err))
        }
    }, [id])

    return (
        <section className={style.shroom_container}>

            <div className={style.shroom_data_container}>
                <div className={style.shroom_image}>
                    <img src={shroom.img} alt="" />
                </div>
                <div className={style.shroom_data}>
                    <h1 className={style.mushroom_name}>{shroom.name}</h1>
                    <div className={style.mushroom_items}>
                        <ul>
                            <li className={style.shroom_item}>Genus: <span className={style.mushroom_info}>{shroom.genus}</span></li>
                            <li className={style.shroom_item}>Species: <span className={style.mushroom_info}>{shroom.species}</span></li>
                            <li className={style.shroom_item}>Edibility: {shroom.edible ? (<span className={style.mushroom_info}>Edible <FaApple /></span>) : (<span>Non-Edible<FaSkull /></span>)}</li>
                            <li className={style.shroom_item}>Toxicity:  {shroom.toxic ? (<span className={style.mushroom_info}>Toxic <FaBiohazard /></span>) : (<span>Non-Toxic<BiErrorAlt /></span>)}</li>
                        </ul>

                        <p className={style.mushroom_description}>
                            {shroom.description}
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Mushroom; 