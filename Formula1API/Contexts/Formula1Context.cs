namespace Formula1API.Contexts;

//Installasjon av Entity Framework Core for å lage database
using Microsoft.EntityFrameworkCore;
using Formula1API.Models;


public class Formula1Context : DbContext
{
    public Formula1Context(DbContextOptions<Formula1Context> options) : base(options){}
    public DbSet<Driver> Drivers { get; set; }
    public DbSet<Team> Teams { get; set; }
    public DbSet<Race> Races { get; set; }
}