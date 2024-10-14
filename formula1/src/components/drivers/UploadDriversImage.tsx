/*import {useState, ChangeEvent} from 'react';
import DriverService from '../../services/DriverService';

const UploadDriverImage = () => {

    const [image, setImage] = useState<File | null>(null);

    const setImageHandler = (event: ChangeEvent<HTMLInputElement>) => {
        try {
            const {files} = event.target;
            if (files != null) {
                const file = files[0];
                setImage(file);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    const uploadImage = () => {
        try {
            if (image != null) {
                DriverService.uploadImage(image);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <section>
            <h3>Last opp bilde test</h3>
            <label>Bilde</label>
            <input type="file" onChange={setImageHandler} />
            <input type="button" onClick={uploadImage} value="Last opp bilde" />
        </section>
    )
}

export default UploadDriverImage;
*/
