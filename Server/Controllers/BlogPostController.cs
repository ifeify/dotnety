using System.Net.Mime;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;

[ApiController]
[Produces(MediaTypeNames.Application.Json)]
[Route("api/posts")]
public class BlogPostController : ControllerBase {
    private readonly ILogger<BlogPostController> logger;
    public BlogPostController(ILogger<BlogPostController> logger) {
        this.logger = logger;
    }

    [HttpPost]
    public ActionResult<BlogPost> NewBlogPost(NewBlogPostInput newBlogPost) {
        logger.LogInformation(LogEvents.NewBlogPostEvent, "New post request {}", newBlogPost);
        BlogPost post = new BlogPost(author: "Hello", title: "GhostWriter", content: "The north remembers");
        return Ok(post);
    }

    [HttpGet("{postId}")]
    public ActionResult<BlogPost> GetBlogPost(long postId) {
        logger.LogInformation(LogEvents.GetBlogPostEvent, "Retrieving blog post for post id {}", postId);
        BlogPost post = new BlogPost(author: "", title: "", content: "");
        return Ok(post);
    }
}