import {IDriver}  from "./IDriver";

// Reglene for hver funksjon i contexten
export interface IDriverContext {
    drivers: IDriver[];
    selectedDriver: IDriver | null;
    isDriverActive: boolean;
    getDrivers: () => void;
    getDriverById: (id: number) => void;
    getDriverByName: (name: string) => void;
    postDriver: (newDriver: IDriver) => void;
    putDriver: (updateDriver: IDriver) => void;
    deleteDriver: (id: number) => void;
    uploadImage: (image: File) => void;
    setIsDriverActive: (active: boolean) => void;
}