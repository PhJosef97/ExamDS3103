import AddDrivers from "../components/drivers/AddDrivers";
import DriversList from "../components/drivers/DriversList";

const AddDriversPage = () => {
    return (
        <section>
        <h3 className="display-4 mb-3 text-danger"><strong>Add an Driver</strong></h3>
            <AddDrivers />
            <DriversList/>
        </section>
    )
}

export default AddDriversPage;
