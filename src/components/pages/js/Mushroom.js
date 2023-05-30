import style from '../css/Mushroom.module.css'

function Mushroom() {
    const shroom_info = ['Genus', 'Species', 'Edible', 'Toxic']

    return (
        <section className={style.shroom_container}>

            <div className={style.shroom_data_container}>
                <div className={style.shroom_image}>
                </div>
                <div className={style.shroom_data}>
                    <h1>Amanita muscaria</h1>
                    <div>
                        <ul>
                            {shroom_info.map((x) => <li>{x}:</li>)}
                        </ul>
                        amanita musgasaospdkaspo paoskposad opasdasopdk pak
                        sdopasdopkasdko asdopsadpo askopdpokaspokdas opaposdopasd
                        aspod  aposkdpoadsk.
                        asdopdopaskopd sapo kd
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Mushroom;