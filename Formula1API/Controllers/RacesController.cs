namespace Formula1API.Controllers;

// Henter inn nødvendige pakker
using Microsoft.AspNetCore.Mvc;
using Formula1API.Models;
using Formula1API.Contexts;
using Microsoft.EntityFrameworkCore;


// Gjør det samme jeg har gjort med DriversController.cs
[ApiController]
[Route ("[controller]")]

public class RacesController : ControllerBase
{
    private readonly Formula1Context formula1Context;

    public RacesController(Formula1Context _forumula1Context)
    {
        formula1Context = _forumula1Context;
    }

    [HttpGet]

    public async Task<ActionResult<List<Race>>> Get()
   {
        // try catch for å gi tilbakemleding om noe galt med database.
        try
        {
            List<Race> races = await formula1Context.Races.ToListAsync();
            if (races != null) 
            {
             return Ok(races);   
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


    [HttpGet("{id}")]
    public async Task<ActionResult<Race>> Get(int id)
    {
        try
        {
            Race? racer = await formula1Context.Races.FindAsync(id);
            if (racer != null)
            {
                return Ok(racer);
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
    
    [HttpPost]
    public async Task<ActionResult> Post(Race newRace) 
    {
        try
     {
        formula1Context.Races.Add(newRace);
        await formula1Context.SaveChangesAsync();

        if (newRace != null)
        {
            return Ok(newRace);
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
}