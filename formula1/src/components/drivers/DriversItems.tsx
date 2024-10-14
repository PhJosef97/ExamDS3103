import { FC } from 'react';
import {IDriver} from '../../interfaces/IDriver';

const DriversItem: FC<IDriver> = ({ id, name, age, nationality, manufacturer, image }) => {
    const imageUrl = `http://localhost:5178/images/${image}`;
    return (
        <article className="col-sm-12 col-md-4 col-lg-3 ">
        <div className="card card-secondary">
            <img src={imageUrl} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name} {`(${id})`}</h5>
                <p className="card-text">Manufacturer: {manufacturer}</p>
                <p className="card-text">Age: {age}</p>
                <p className="card-text">Nationality: {nationality}</p>
            </div>
        </div>
        </article>
    );
}

export default DriversItem;
