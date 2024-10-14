import { useContext, ChangeEvent, useState } from 'react';
import { DriverContext } from '../../contexts/DriverContext';
import { IDriverContext } from '../../interfaces/IDriverContext';

const DeleteDriver = () => {
    const { deleteDriver, drivers, setIsDriverActive } = useContext(DriverContext) as IDriverContext;
    const [id, setId] = useState<number | null>(null);
    const [message, setMessage] = useState<string | null>(null); // Add this line

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setId(Number(e.target.value));
    };

    const handleDeleteClick = () => {
        if (id !== null) {
            const driverExists = drivers.some(driver => driver.id === id);
            if (!driverExists) {
                setIsDriverActive(false);
                setMessage("Id finnes ikke"); // Update this line
                return;
            }
            deleteDriver(id);
            setMessage("Driver deleted successfully"); // Add this line
        } else {
            setMessage("Du må velge en driver"); // Update this line
        }
    };

    return (
        <section>
            <input type="number" onChange={handleInputChange} placeholder="Enter driver ID" />
            <button onClick={handleDeleteClick}>Delete Driver</button>
            {message && <p>{message}</p>} {/* Add this line */}
        </section>
    );
};;

export default DeleteDriver;