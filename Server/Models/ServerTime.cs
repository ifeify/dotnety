public class ServerTime {
    public Guid RequestId { get; private set; }

    public DateTime CurrentTime { get; set; } 

    public ServerTime() {
        RequestId = Guid.NewGuid();
        CurrentTime = DateTime.UtcNow;
    }
}