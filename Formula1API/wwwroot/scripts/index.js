import DriverService from "./service/DriverSerivce.js";
import InfoModule from "./modules/InfoModule.js";

//output section
const outputSection = document.querySelector("#output-section");
const infoSection = document.querySelector("#info-section");

//buttons
const showDriversBtn = document.querySelector("#show-drivers-btn");
const showDriverByIdBtn = document.querySelector("#show-driver-by-id-btn");
const showDriverByNameBtn = document.querySelector("#show-driver-by-name-btn");

//placeholders
const driverIdInput = document.querySelector("#driver-id-input");
const driverName = document.querySelector("#driver-name");

const showInfo = async () => {
    try {
        const result = await InfoModule.getInfo();
        let htmlTxt = "";

        result.forEach(info => {
            htmlTxt += `
            <article>
                <h3>${info.text}</h3>
            </article>    
            `;
        });

        infoSection.innerHTML = htmlTxt;
    } catch (error) {
        console.log(error);
    }
}


const showDrivers = async () => {
    try{
    outputSection.innerHTML = "";
    const result = await DriverService.getDrivers();
    let htmlTxt = "";
    result.forEach(driver => {
        htmlTxt += `
        <article>
            <h3>ID: ${driver.id}</h3>
            <p>NAME: ${driver.name}</p>
            <p>AGE:${driver.age}</p>
            <p>MANUFACTUR: ${driver.manufacturer}</p>
            <p>IMAGE FILE: ${driver.image}</p>
        </article>    
        `;
    });
    outputSection.innerHTML = htmlTxt;
} catch (error) {
    console.log("Noe galt", error);
}
}

const showDriverById = async () => {
    try {
        outputSection.innerHTML = "";
        const id = driverIdInput.value;
        const result = await DriverService.getDriverById(id);
        let htmlTxt = "";
        htmlTxt += `
        <article>
            <h3>ID: ${result.id}</h3>
            <p>NAME: ${result.name}</p>
            <p>AGE:${result.age}</p>
            <p>MANUFACTUR: ${result.manufacturer}</p>
            <p>IMAGE FILE: ${result.image}</p>
        </article>
        `;
        outputSection.innerHTML = htmlTxt;
        
    } catch (error) {
        console.log("Ikke funnet id", error);
        outputSection.innerHTML = `<h2>Det fins ikke id: ${driverIdInput.value}</h2>`;
    }
}


    // Eventlisteners
const setEvents = async () => {
    showDriversBtn.addEventListener("click", showDrivers);
     showDriverByIdBtn.addEventListener("click", showDriverById);

}

(()=>{
    showInfo();
    setEvents();
})();