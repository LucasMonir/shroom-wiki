import { useEffect, useState } from "react";
import ShroomList from "../../layout/js/ShroomList";

function Edible() {
    const [shrooms, setShrooms] = useState([]);
    const title = "These are believed to be Edible mushrooms!"
    const subtitle = "Be cautious whenever foraging, we don't encourage you to eat any mushrooms without proper knowledge, we post for educational purpouses only!"

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

export default Edible;