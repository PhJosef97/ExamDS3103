// Henter pakkene som trengs for database
using Formula1API.Contexts;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<Formula1Context>(
    options => options.UseSqlite("Data Source=Databases/Formula1.db")
); 

// CORS for å hente data fra andre domener
builder.Services.AddCors(
    options => {
        options.AddPolicy("AllowAll",
            policies => policies
            .AllowAnyMethod()
            .AllowAnyOrigin()
            .AllowAnyHeader()
        );
    }
);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors("AllowAll");

/* 
UseStaticFiles() gjør at vi kan bruke statiske filer som html, css og js
slik at vi kan lage endepunkter til nettsiden til utviklerene
 */
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
