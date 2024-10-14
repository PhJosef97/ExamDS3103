import axios from "axios";
import {IDriver} from "../interfaces/IDriver";

const DriverService = (()=>{

    // Endepunkene til APIet
    const driverController = "http://localhost:5178/drivers";
    const ImageUploadEndPoint = "http://localhost:5178/imageupload";

    // Henter alle sjåfører
    const getAll = async () => {
        try {
        const result = await axios.get<IDriver[]>(driverController);
        return result.data;
        }catch(err) {
            console.log("Får ikke kontakt til webApi", err ); // catch vil blant annet kunne utføres ved 40X- eller 50X-feil
        }
    }

    const getbyId = async (id: number) => { // http://localhost:5178/drivers/1 
        try {
        const result = await axios.get(`${driverController}/${id}`);
        return result.data;
        } catch(err) { 
            console.log( "Får ikke tak i ID", err )
        }
    }

    const getbyName = async (name: string) => { // http://localhost:5178/drivers/GetByName/max%20verstappen
        try {
        const result = await axios.get(`${driverController}/GetByName/${name}`);
        return result.data;
        } catch(err) {
            console.log( "Navnet finnes ikke", err )
        }
    } 

    const deleteById = async (id: number) => {
        try {
        const result = await axios.delete(`${driverController}/${id}`);
        return result.data;
        } catch(err) {
            console.log( "Id finnes ikke", err )
        }
    }
    
   const putDriver = async (updateDriver: IDriver) => {
       try {
       const result = await axios.put(driverController, updateDriver);
         console.log(result);
       } catch(err) {
           console.log("It didnt work", err )
       }
   }

   const postDriver = async (newDriver: IDriver) => {
    try {
    const result = await axios.post(driverController, newDriver);
    console.log(result.data);
    return result.data;
    } catch(err) {
        console.log( "Fikk ikke hente nyDriver",err )
    }        
}

    const uploadImage = async (image: File) => {
        try {
            const formData = new FormData();
            formData.append("file", image);

            const result = await axios ({
                url: ImageUploadEndPoint,
                method: "POST",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" }
            })
            console.log("Sendt bilde over til wwwroot mappe", result);
            
            formData.delete("file");
        }
        catch (err) {
            console.log("Gikk galt med opplasting av bilde", err);
        }
    }
    return {
        getAll,
        getbyId,
        getbyName,
        deleteById,
        postDriver,
        putDriver,
        uploadImage
    }
}
)();

export default DriverService;