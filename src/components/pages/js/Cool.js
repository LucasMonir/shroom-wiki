import { useEffect, useState } from "react";
import ShroomList from "../../layout/js/ShroomList";

function Cool() {
    const [shrooms, setShrooms] = useState([]);
    const title = "Here are some cool mushrooms!"
    const subtitle = "Cool looking fungus to brighten your day..."

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

export default Cool;