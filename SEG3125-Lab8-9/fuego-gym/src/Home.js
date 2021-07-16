import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Home = () => {

    const [name, setName] = useState('mario')

    const handleClick = () => {
        setName('luigi')
    }

    const handleClickAgain = (name) => {
        console.log(name);
    }

    return ( 
        <div className="home">
            <div className="d-grid gap-2">
                <Button variant="primary" size="lg">
                    Personal Training {'>'}
                </Button>
                <Button variant="primary" size="lg">
                    Group Classes {'>'}
                </Button>
                <Button variant="primary" size="lg">
                    Memberships {'>'}
                </Button>
            </div>
            <h2>This is my homepage</h2>
            <p>{name}</p>
            <Button onClick={handleClick} variant="success">Click me!</Button>
            <Button onClick={() => {
                handleClickAgain('mario');
            }}>Click me again!</Button>
        </div>
     );
}
 
export default Home;