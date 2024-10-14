import DeleteDriver from "../components/drivers/DeleteDriver";
import DriversList from "../components/drivers/DriversList";

const DeleteDriversPage = () => {
    return (
      <section>
        <h3 className="display-4 mb-3 text-danger"><strong>Delete Driver</strong></h3>
        <DeleteDriver />
        <DriversList />
      </section>
    );
}

export default DeleteDriversPage;