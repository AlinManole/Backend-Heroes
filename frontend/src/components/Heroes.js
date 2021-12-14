import React, { useEffect, useState } from 'react';


const Heroes = () => {
    const [heroes, setHeroes] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/heroes`)
            .then((res) => res.json())
            .then((res) => setHeroes(res));
    },[]);

    console.log(heroes)
    return (
        <div>
        {heroes.map((hero) => (
                <div  
                    key={hero.name}
                >
                    {hero.name}
                </div>
            )
            )
        }
        </div>
    )
}

export default Heroes;