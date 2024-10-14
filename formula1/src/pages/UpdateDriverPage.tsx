import UpdateDriver from "../components/drivers/UpdateDriver";
import DriversList from "../components/drivers/DriversList";

const UpdateDriversPage = () => {
    return (
        <section>
            <h3 className="display-4 mb-3 text-danger"><strong>Update driver</strong></h3>
            <UpdateDriver/>
            <DriversList/>
        </section>
    )
}

export default UpdateDriversPage;