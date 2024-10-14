import { useContext, ChangeEvent, useState } from 'react';
import { DriverContext } from '../../contexts/DriverContext';
import { IDriverContext } from '../../interfaces/IDriverContext';
import DriversItem from './DriversItems';

const SearchDriver = () => {
    // Henter funksjonene fra DriverContext
    const { getDriverById, getDriverByName, selectedDriver } = useContext(DriverContext) as IDriverContext;
    const [id, setId] = useState(0);
    const [name, setName] = useState("");

    // Skal vise driveren ved å skrive navn eller id automatisk i input feltene
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value;
        setName(name);
        getDriverByName(name);
    }

    const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
        const id = parseInt(e.target.value);
        setId(id);
        getDriverById(id);
    };


    return (
        <section className=''>
        <input onChange={handleNameChange} id='name' name='name' value={name} type="text" placeholder="Enter name" />
        <input onChange={handleIdChange} id='id' value={id} type="number" placeholder="Enter ID" />
        <br />
        {selectedDriver && (
            <DriversItem {...selectedDriver} />
        )}
        </section>
    )
}

export default SearchDriver;