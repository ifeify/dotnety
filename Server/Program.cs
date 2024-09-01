using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);
// builder.Services.AddHealthChecks();
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        // switch from camel case to pascal case
        // options.JsonSerializerOptions.PropertyNamingPolicy = null;
        // pretty print json
        options.JsonSerializerOptions.WriteIndented = true;
    });

var allowNextJSOrigins = "_allowFrontendNextAppOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: allowNextJSOrigins,
                    policy =>
                    {
                        policy.WithOrigins("http://localhost:3000")
                                .AllowAnyHeader()
                                .AllowAnyMethod();
                    });
});
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();
// app.UseAuthorization();
// app.UseHealthChecks(new PathString("/api/health"));

app.UseCors(allowNextJSOrigins);
app.MapControllers();

app.Run();
