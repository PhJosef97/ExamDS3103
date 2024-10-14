import { useContext, ChangeEvent, useState, useRef } from 'react';
import { DriverContext } from '../../contexts/DriverContext';
import {IDriverContext} from '../../interfaces/IDriverContext';
import {IDriver} from '../../interfaces/IDriver'; 

const AddDrivers = () => {
    const {postDriver, uploadImage, } = useContext(DriverContext) as IDriverContext;
    
    const [errorMessage, setErrorMessage] = useState<string|null>(null);
    const imageInputRef = useRef<HTMLInputElement>(null);

    const [newDriver, setNewDriver] = useState<IDriver>(
        {
            name: "", 
            manufacturer: "", 
            age: 0,
            nationality: "",
            image: "" 
        }
        );

    // addDriver() legger til en ny driver i database
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        try{
        const { name, value } = e.target;
        setNewDriver({ ...newDriver, [name]: value });
        }catch(err){
            console.log("Koden fungerer ikke i handleChange()", err);
        }
    }

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        try {
            const { files } = e.target;
            if (files != null) {
                const file = files[0];
                setNewDriver({ ...newDriver, image: file.name });
            }
        }
        catch (err) {
            console.log("HandleImageChange() funket ikke",err);
        }
    }

    const handleClick = async () => {
        try{
        // Sjekk om alle feltene er fylt ut
        if (Object.values(newDriver).some(value => value === "" || value === 0)) {
            setErrorMessage("Du må fylle ut alle feltene");
        } else {
            // Sjekk om det er valgt et bilde
            if (imageInputRef.current && imageInputRef.current.files) {
                console.log(imageInputRef.current.files[0]);
                uploadImage(imageInputRef.current.files[0]);
            }
            
            console.log(newDriver);
            postDriver(newDriver);
            // Nullstill inputfeltene etter å ha lagt til føreren
            setNewDriver({
                name: "",
                manufacturer: "",
                age: 0,
                nationality: "",
                image: ""
            });

            // Nullstill feilmeldingen
            setErrorMessage("");
        }
    }catch(err){
        console.log(err, "Koden fungerer ikke i handleClick()");
    }
}

    return (
    <section className='row'>
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

        <article className="form-group col-md-6">
                <label className='text-light'> <strong><p>Which manufacturer do you want to race?</p></strong></label>
                <input
                    type="text"
                    name="manufacturer"
                    className="form-control border1"
                    value={newDriver.manufacturer}
                    placeholder="Ferrari"
                    onChange={handleChange}
                />
        </article>
            <article className="form-group col-md-6">
                <label className='text-light'><p><strong>How old are you?</strong></p></label>
                <input
                    type="number"
                    name="age"
                    className="form-control border1"
                    value={newDriver.age}
                    onChange={handleChange}
                />
            </article>
            <article className="form-group col-md-6">
                <label className='text-light'><p><strong>Write Nationality</strong></p></label>
                <input
                    type="text"
                    name="nationality"
                    className="form-control border1"
                    value={newDriver.nationality}
                    placeholder='Norwegian'
                    onChange={handleChange}
                />
            </article>
                <article className="form-group paddingtop">
                <label className='text-light'><p><strong>Image</strong></p></label>
                <input
                    type="file"
                    name="image"
                    className="form-control stretch-input border1"
                    ref={imageInputRef}
                    onChange={handleImageChange}
                />
                </article>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
            Add Driver
        </button>
        {errorMessage && <div className='alert alert-danger'> <strong>{errorMessage}</strong></div>}
        </section>        
        
    );
};

export default AddDrivers;
