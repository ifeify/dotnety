namespace Server.Tests;

[TestClass]
public class ServerTimeTest
{
    [TestMethod]
    public void Server_ReturnsCurrentTime() {
        var now = DateTime.UtcNow;

        ServerTime serverTime = new ServerTime();
        serverTime.CurrentTime = now;

        Assert.AreEqual(serverTime.CurrentTime, now);
    }
}