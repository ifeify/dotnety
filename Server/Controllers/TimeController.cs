using System.Net.Mime;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;

[ApiController]
[Produces(MediaTypeNames.Application.Json)]
[Route("api/time")]
public class TimeController : ControllerBase {
    private readonly ILogger<TimeController> logger;
    public TimeController(ILogger<TimeController> logger) {
        this.logger = logger;
    }

    [HttpGet]
    public ActionResult GetCurrentTime() {
        logger.LogInformation(LogEvents.GetCurrentTimeEvent, "Got request and returning server time...");
        return Ok(new ServerTime());
    }
}