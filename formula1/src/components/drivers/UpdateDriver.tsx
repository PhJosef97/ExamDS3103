import { ChangeEvent, useContext, useState } from 'react';
import { DriverContext } from '../../contexts/DriverContext';
import {IDriverContext} from '../../interfaces/IDriverContext';
import {IDriver} from '../../interfaces/IDriver';

const UpdateDriver = () => {
    const {putDriver, drivers} = useContext(DriverContext) as IDriverContext;

    // Henter spesifikk id fra driver og setter den til 0 som default
    const [id, setId] = useState<number>(0);
    // Henter interface reglene for her skal alle properties oppdateres som bruker kan ønskes å endre
    const [driverToUpdate, setDriverToUpdate] = useState<IDriver>(
        {
            name: "", 
            manufacturer: "",
            age: 0,
            nationality: "",
            image: ""
        }
    );

    // Henter alle properties fra driverToUpdate og setter de til verdiene som er skrevet inn i input feltene
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "id") {
            setId(Number(value));
        } else {
            // ...prevState betyr at alle properties som ikke er endret skal beholdes
            setDriverToUpdate(prevState => ({ ...prevState, [name]: value }));
        }
    }
// Henter id fra driver og setter den til 0 som default
const getByIdOnClick = () => {
    const driver = drivers.find(driver => driver.id === id);
    if (driver) {
        setDriverToUpdate(driver);
    } else {
        alert(`Driver with id ${id} not found`);
    }
};

// Ved klikk har brukeren oppdatert driveren
const handleClick = async () => {
    putDriver(driverToUpdate);
};

    return (
        /*
        <section classname = "row">
        <article className="form-group col-md-6">
                <label className='text-light'><strong><p>Sign your name</p></strong></label>
                <input
                    type="text"
                    name="name"
                    className="form-control border1"
                    value={newDriver.name}
                    placeholder="Rolando The best"
                    onChange={handleChange}
                />
        </article>
     */
        <section className="row">
            <article className='form-group col-md-6'>
            <label className='text-light'><strong><p>ID</p></strong></label>

                <input
                    type="number"
                    className="form-control stacked-input name-input"
                    id="id"
                    name='id'
                    value={id}
                    placeholder="Choose ID"
                    onChange={handleChange}
                />
                <input type="button" onClick={getByIdOnClick} value="Look for id" />
        </article>
            <article className='form-group col-md-6'>
            <label className='text-light'> <strong><p>Name</p></strong></label>
                <input
                    type="text"
                    className="form-control stacked-input name-input"
                    id="name"
                    name='name'
                    maxLength={50} 
                    value={driverToUpdate.name}
                    placeholder="First name"
                    onChange={handleChange}
                />
        </article>
        <article className="form-group col-md-6">
                <label className='text-light'> <strong><p>Manufacturer</p></strong></label>
                <input
                    type="text"
                    className="form-control stacked-input name-input"
                    id="manufacturer"
                    maxLength={50}
                    name='manufacturer' 
                    value={driverToUpdate.manufacturer}
                    placeholder="Ferrari"
                    onChange={handleChange}
                />
        </article>
        <article className="form-group col-md-6">
                <label className='text-light'> <strong><p>Age</p></strong></label>
                <input
                    type="number"
                    className="form-control stacked-input name-input"
                    id="age"
                    name='age'
                    maxLength={50} 
                    value={driverToUpdate.age}
                    placeholder="Age"
                    onChange={handleChange}
                />
        </article>
        <article className="form-group col-md-6">
                <label className='text-light'> <strong><p>Nationality</p></strong></label>
                <input
                    type="text"
                    className="form-control stacked-input name-input"
                    id="nationality"
                    maxLength={50}
                    name='nationality' 
                    value={driverToUpdate.nationality}
                    placeholder="Norwegian"
                    onChange={handleChange}
                />
        </article>
     <button type="button" className="btn btn-primary" onClick={handleClick}>
         Update Driver
        </button>
            
    </section>    
    );
};

export default UpdateDriver;