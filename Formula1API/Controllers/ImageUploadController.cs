namespace Formula1API.Controllers;

using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]

public class ImageUploadController : ControllerBase
{
    private readonly IWebHostEnvironment hosting; 

    public ImageUploadController(IWebHostEnvironment _hosting)
    {
        hosting = _hosting;
    }

    [HttpPost]
    public IActionResult SaveImage(IFormFile file)
    {
        try
        {
            string webRootPath = hosting.WebRootPath;
            string absolutePath = Path.Combine($"{webRootPath}/images/{file.FileName}");

            using (var fileStream = new FileStream(absolutePath, FileMode.Create))
            {
                file.CopyTo(fileStream);
            }
            return Ok();
        }
        catch
        {
            return StatusCode(500);
        }
    }

// TESTER OM URL FUNKER
    [HttpGet]
    public string Get()
    {
        return "Hello World";
    }
    /*
    [HttpGet]
    public IActionResult GetImage()
    {
        try
        {
            string webRootPath = hosting.WebRootPath;
            string absolutePath = Path.Combine($"{webRootPath}/images/");

            return Ok(absolutePath);
        }
        catch
        {
            return StatusCode(500);
        }
    }
    */
}