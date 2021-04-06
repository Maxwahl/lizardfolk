using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PowerSlide.Core;
using PowerSlide.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PowerSlide.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PresentationController : ControllerBase
    {

        private readonly ILogger<PresentationController> _logger;

        public PresentationController(ILogger<PresentationController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get() =>  Ok(Repository.GetInstance().Presentations());

        [HttpPost]
        public IActionResult Post(Presentation presentation)
        {
            try
            {
                Repository.GetInstance().AddPresentation(presentation);
                return Ok(Repository.GetInstance().Presentations());
            }
            catch (ArgumentException ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("statistic")]
        public IActionResult GetInTimepan(string fromDate, string toDate)
        {
            _ = DateTime.TryParse(fromDate, out DateTime fromDateValue);
            _ = DateTime.TryParse(toDate, out DateTime toDateValue);
            if (toDateValue == DateTime.MinValue)
            {
                toDateValue = DateTime.MaxValue;
            }

            return Ok(Repository.GetInstance().GetPresentationCount(fromDateValue, toDateValue));
        }
    }
}
