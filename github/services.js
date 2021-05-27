const api = require("../api");
const adapter = require("./adapter");

const github = {
  star: async (username) => {
    const response = await api.get(`/users/${username}/starred`);
    const star = response.data.map(adapter.transformRepoItem);
    return star;
  },
};

module.exports = github;
