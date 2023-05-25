import { useEffect, useState } from "react";
import ShroomList from "../../layout/js/ShroomList";

function Toxic() {
    const [shrooms, setShrooms] = useState([]);
    const title = "Beware! These are Toxic mushrooms!"
    const subtitle = "We listed species that we consider dangerous, so please avoid messing with these little guys!"

    useEffect(() => {
        fetch('http://localhost:4200/shrooms',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },

            })
            .then(x => x.json())
            .then((x) => { setShrooms(x) })
            .catch(err => console.log(err))
    }, [])


    return (
        <ShroomList shrooms={shrooms} title={title} subtitle={subtitle}></ShroomList>
    );
}

export default Toxic;