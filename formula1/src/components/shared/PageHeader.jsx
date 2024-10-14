import { Link } from 'react-router-dom';

const PageHeader = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <Link className="navbar-brand text-danger px-3" to="/">
                    <img style={{ width: "100px", height: "auto" }} src="images/F1-logo.png" alt="F1 Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-light btn btn-danger me-3" to="drivers">Drivers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light btn btn-danger me-3" to="drivers-quiz">Drivers Quiz</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light btn btn-danger me-3" to="add-driver">Add Driver</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light btn btn-danger me-3" to="drivers-search">Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light btn btn-danger me-3" to="delete-driver">Delete Driver</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light btn btn-danger me-3" to="update-driver">Update Driver</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light btn btn-danger me-3" to="endpoints-driver">Endpoint</Link>
                        </li>
                    </ul>
            </div>
        </nav>
    );
};

export default PageHeader;
