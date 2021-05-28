const build = require("./app");
let app;
describe("test app mock", () => {
  beforeAll(() => {
    app = build();
  });

  it("return 200 when pass /api/starred/test router", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/api/starred/test",
    });
    expect(response.statusCode).toEqual(200);
  });

  it("return 400 when pass /api/starred/ router", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/api/starred/",
    });
      
    expect(response.statusCode).toEqual(400);
  });
});
