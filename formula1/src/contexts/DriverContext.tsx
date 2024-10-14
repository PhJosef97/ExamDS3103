import { createContext, useState, useEffect, FC, ReactNode } from "react";
import DriverService from "../services/DriverService";
import { IDriverContext } from "../interfaces/IDriverContext";
import { IDriver } from "../interfaces/IDriver";

export const DriverContext = createContext<IDriverContext | null>(null);

// Pensum
interface Props {
  children: ReactNode;
}

export const DriverProvider: FC<Props> = ({ children }) => {
  const [drivers, setDrivers] = useState<IDriver[]>([]);
  const [selectedDriver, setSelectedDriver] = useState<IDriver | null>(null);
  const [isDriverActive, setIsDriverActive] = useState<boolean>(false);


// 3 sekunders delay på getDrivers
 useEffect(() => {
    setTimeout(() => {
        getDrivers();
    }, 3000)
}, [])

    // Kommer fra DriverService og regler med samme navn funksjon fra IDriverContext som gjelder alle funksjoner nedover
    const getDrivers = async () => {
      try {
        const result = await DriverService.getAll();
        if (result) {
          setDrivers(result);
        }
      } catch (error) {
        console.log(error);
      }
  };


    const getDriverById = (id: number) => {
      const result = drivers.find(driver => driver.id === id);
      setSelectedDriver(result || null);
  };

  
    const getDriverByName = (name: string) => {
    const result = drivers.filter(driver => driver.name.toLowerCase().includes(name.toLowerCase()));
    setSelectedDriver(result.length > 0 ? result[0] : null);
    return result;
  };


  const postDriver = async (newDriver: IDriver) => {
    try {
      const result = await DriverService.postDriver(newDriver) as IDriver;
      setDrivers(prevDrivers => [result, ...prevDrivers]); 
    } catch (error) {
      console.error(error);
    }
  };

  const putDriver = async (updatedDriver: IDriver) => {
    try {
      await DriverService.putDriver(updatedDriver);
      getDrivers();
    }catch (error) {
      console.log(error);
    };
  }
  
  const uploadImage = async (image: File) => {
    try {
      const result = await DriverService.uploadImage(image);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteDriver = async (id: number) => {
    try {
      const driverExists = drivers.some(driver => driver.id === id);
      if (!driverExists) {
        setIsDriverActive(false);
        return;
      }
  
      const result = await DriverService.deleteById(id);
      if (result) {
        setIsDriverActive(true);
        setDrivers(prevDrivers => prevDrivers.filter(driver => driver.id !== id));
      }
    } catch (error) {
      console.error(error);
    }
};


// "Children" som sprer dataen videre
  return (
    <DriverContext.Provider
      value={{
        drivers,
        selectedDriver,
        isDriverActive,
        getDrivers,
        getDriverById,
        getDriverByName,
        postDriver,
        putDriver,
        deleteDriver,
        uploadImage,
        setIsDriverActive
      }}
    >
      {children}
    </DriverContext.Provider>
  );
};
