import React , {useState} from 'react';
import Heroes from '../components/Heroes';

const Home = () => {
    const [hero, setHero] = useState([])
    const [val, setVal] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        const addHero = {
            name: hero
        }
       

        fetch('http://localhost:5000/heroes', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addHero)
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    function handleChange(event) {
        setHero(event.target.value);
    }



    return (
        <div className="container m-5">
            <div >
                <h2>Add Hero</h2>
                <form onSubmit={handleSubmit}>
                    <input className="m-1" type="text" onChange={handleChange} />
                    <button className="btn-primary" onClick={() => setVal(() => "")} type="submit">Send</button>
                </form>
            </div>
            <Heroes />
        </div>
    );
};

export default Home