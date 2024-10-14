// Kommentar: Ville vise fram moduler som egentlig kunne ha vært å vise DriverModule,
// men det er allerede laget i en annen oppgave.

const InfoModule = (()=> {

    const Info = [
        {
            text: "Hei og velkommen til min web api/endepunkt. Her kan du finne informasjon om mine prosjekter. Det du ser nede er knappene for å vise frem informasjon om sjåfører som er fra før og nye kommende. Du kan velge om å skrive selv i url eller bruke knappene under",
        },
        {
            text: "GET alt info om sjåfør: localhost:5178/Drivers",
        },
        {
            text: "GET en sjåfør av tall for eksempel: localhost:5178/Drivers/1",
        },
        {
            text: "GET en sjåfør av navn for eksempel: localhost:5178/Drivers/GetByName/Max%20Verstappen",
        },
    ];


    const getInfo = async () => structuredClone(Info);

    return {
        getInfo,
    }

})();

export default InfoModule;

