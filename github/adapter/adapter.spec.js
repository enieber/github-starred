const adapter = require("../adapter");
const repoMock = require("./response.mock.json");

describe("test adapter module", () => {
  it("adapter is not undefined", () => {
    expect(adapter).not.toBeUndefined();
  });
  describe("test transformRepoItem in adapter", () => {
    it("adapter.transformRepoItem not undefined", () => {
      expect(adapter.transformRepoItem).not.toBeUndefined();
    });
    it("adapter return object id, name, description, url and language", () => {
      const result = adapter.transformRepoItem(repoMock);
      expect(result).toEqual({
        id: 1296269,
        name: "Hello-World",
        description: "This your first repo!",
        url: "https://api.github.com/repos/octocat/Hello-World",
        language: null,
      });
    });
    it("adapter return error when not send repo", () => {
      expect(() => {
        adapter.transformRepoItem(null);
      }).toThrow(TypeError);
    });
    it("adapter return error when not send repo valid", () => {
      expect(() => {
        adapter.transformRepoItem({ id: 1 });
      }).toThrow(TypeError);
    });
  });
});
