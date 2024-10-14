namespace Formula1API.Controllers;

// Henter inn nødvendige pakker
using Microsoft.AspNetCore.Mvc;
using Formula1API.Models;
using Formula1API.Contexts;
using Microsoft.EntityFrameworkCore;
//using DAPI.models;

// lager route til nettsiden som eksempel http://localhost:5178/drivers
[ApiController]
[Route ("[controller]")]

public class DriversController : ControllerBase
{
    // deklarasjon av context
    private readonly Formula1Context formula1Context;

    // En annen metode for å lage en liste med drivere.
    /*
    private static readonly List<Driver> DriverList = new()
    {
        new Driver {Id = 1000, Name = "Lewis Hamiltion", Manufacter: "Mercedes", Age: 36, Nationality: "British", Image: "hamilton.webp"},
        new Driver {Id = 1001, Name = "Max Verstappen", Manufacter: "Red Bull", Age: 23, Nationality: "Dutch", Image: "verstappen.webp"},
    }

    */

    // initere context
    public DriversController(Formula1Context _forumula1Context)
    {
        formula1Context = _forumula1Context;
    }
/*    
[HttpGet]
// Da måtte jeg skrive ned DTO på alle vis jeg hadde brukt DTO metoden.
public async Task<ActionResult<IEnumerable<DriverDTO>>> GetDrivers()
{
    var drivers = await formula1Context.Drivers.ToListAsync();

    var driverDTOs = drivers.Select(driver => new DriverDTO
    {
        Id = driver.Id,
        Name = driver.Name,
        Manufacturer = driver.Manufacturer,
        Age = driver.Age,
        Nationality = driver.Nationality
    }).ToList();

    return driverDTOs;
}*/

    // GET: Henter ut alle drivere
    [HttpGet]
    public async Task<ActionResult<List<Driver>>> Get()
    {
        // try catch for å gi tilbakemleding om noe galt med database.
        try
        {
            List<Driver> drivers = await formula1Context.Drivers.ToListAsync();
            if (drivers != null) 
            {
             return Ok(drivers);   
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(500); // 500 = Internal Server Error. Man vil få denne feilen eksempelvis hvis det skjer noe galt med databasen her.
        }
    }



    // GET: Henter ut en driver med id
    [HttpGet("{id}")]
    public async Task<ActionResult<Driver>> Get(int id)
    {
        try 
        {
            Driver? driver = await formula1Context.Drivers.FindAsync(id);
            if (driver != null)
            {
                return Ok(driver);
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }

    // POST: Legger til en driver
    [HttpPost]
    public async Task<ActionResult<Driver>> Post(Driver newDriver) 
    {
        try
        {
            formula1Context.Drivers.Add(newDriver);
            await formula1Context.SaveChangesAsync();
            return CreatedAtAction("Get", new {id = newDriver.Id}, newDriver);
        }
        catch
        {
            return StatusCode(500); // Tilbakemelding om noe galt med databasen
        }
    }

[HttpGet("GetByName/{name}")]
public async Task<ActionResult<Driver>> GetByName(string name)
{
    try
    {
        // konverterer navnet til små bokstaver
        string lowercaseName = name.ToLower();

        // Kan også skrive inn lowercase og includes i url
        List<Driver> drivers = await formula1Context.Drivers
            .Where(d => d.Name != null && d.Name.ToLower().Contains(lowercaseName))
            .ToListAsync();

        if (drivers != null)
        {
            return Ok(drivers);
        }
        else
        {
            return NotFound();
        }
    }
    catch
    {
        return StatusCode(500); 
    }
}

    // DELETE: Sletter en driver
    [HttpDelete("{id}")]
    public async Task<ActionResult> Delete(int id)
    {
        try
        {
            Driver? driver = await formula1Context.Drivers.FindAsync(id);
            if (driver != null)
            {
                formula1Context.Drivers.Remove(driver);
                await formula1Context.SaveChangesAsync();
            }
                return NoContent();
        }
        catch
        {
            return StatusCode(500); // Tilbakemelding om noe galt med databasen
        }
    }
    
    // PUT: Oppdaterer en driver
    [HttpPut]
    public async Task<IActionResult> Put(Driver updatedDriver)
    {
        try
        {
            formula1Context.Entry(updatedDriver).State = EntityState.Modified;
            await formula1Context.SaveChangesAsync();
            return NoContent();
        }
        catch
        {
            return StatusCode(500); // Tilbakemelding om noe galt med databasen
        }
    }
    
}