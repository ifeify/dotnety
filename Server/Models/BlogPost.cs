public class BlogPost {
    public Guid PostId { get; set; }

    public string? Author { get; set; }

    public string? Title { get; set; }

    public string? Content { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime LastModifiedAt { get; set; }

    public BlogPost(string author, string title, string content) {
        PostId = Guid.NewGuid();
        Author = author;
        Title = title;
        Content = content;
        CreatedAt = DateTime.UtcNow;
        LastModifiedAt = DateTime.UtcNow;
    }
}