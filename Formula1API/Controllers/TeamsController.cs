namespace Formula1API.Controllers;

using Microsoft.AspNetCore.Mvc;
using Formula1API.Models;
using Formula1API.Contexts;
using Microsoft.EntityFrameworkCore;


// Gjør det samme jeg har gjort med DriversController.cs
[ApiController]
[Route ("[controller]")]

public class TeamsController : ControllerBase
{
    private readonly Formula1Context formula1Context;

    public TeamsController(Formula1Context _forumula1Context)
    {
        formula1Context = _forumula1Context;
    }

    [HttpGet]

    public async Task<ActionResult<List<Team>>> Get()
   {
        // try catch for å gi tilbakemleding om noe galt med database.
        try
        {
            List<Team> teams = await formula1Context.Teams.ToListAsync();
            if (teams != null) 
            {
             return Ok(teams);   
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

    public async Task<ActionResult<Team>> Get(int id)
    {
        try
        {
            Team? team = await formula1Context.Teams.FindAsync(id);
            if (team != null)
            {
                return Ok(team);
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
    public async Task<ActionResult> Post(Team newTeam) 
    {
        try
     {
        formula1Context.Teams.Add(newTeam);
        await formula1Context.SaveChangesAsync();

        if (newTeam != null)
        {
            return Ok(newTeam);
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