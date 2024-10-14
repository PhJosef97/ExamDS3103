const DriverService = (()=> {
    
    const apiEndPoints = "http://localhost:5178/drivers";

    
    const getDrivers = async () => {
        try{
        const result = await axios.get(apiEndPoints);
        return result.data;
        }catch (error){
            console.log(error);
        }
    }

    const getDriverById = async (id) => {
        try{
        const result = await axios.get(`${apiEndPoints}/${id}`);
        console.log(result);
        return result.data;
        }catch (error){
            console.log(error);
        }
    }

    return {
        getDrivers,
        getDriverById
    }
})();

export default DriverService;