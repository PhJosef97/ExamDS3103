import { useContext } from "react";
import DriversItem from "./DriversItems";
import { DriverContext } from "../../contexts/DriverContext";
import {IDriverContext} from "../../interfaces/IDriverContext";

const DriversList = () => {
    
    const {drivers} = useContext(DriverContext) as IDriverContext;

    const getDriversJSX = () => {
        return  drivers.map((_drivers, i) => (
            <DriversItem key={`${i}`}
            id = {_drivers.id}
            name = {_drivers.name}
            age = {_drivers.age}
            manufacturer = {_drivers.manufacturer}
            nationality = {_drivers.nationality}
            image = {_drivers.image}
            />
        ));
    }

    /*
        const getDriversJSX = () => {
        return drivers.map(driver => (
            <DriversItem key={driver.id} {...driver} />
        ));
    }*/

    return (
        <section className="row">
            {/*prøve å style her */}
            {getDriversJSX()}
            </section>
    )
}

export default DriversList;