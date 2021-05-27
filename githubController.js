const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 3000,
  headers: {'X-Custom-Header': 'foobar'}
});

const transformRepoItem = (repoItem) => {
  const {
    id,
    name,
    description,
    url,
    language
  } = repoItem;

  return {
    id,
    name,
    description,
    url,
    language
  }
}

const github = {
  star: async (username) => {
    const response = await instance.get(`/users/${username}/starred`);
    const star = response.data.map(transformRepoItem);
    return star;
  } 
};

const controller = (fastify) => {
  fastify.get('/starred/:username', async (request, reply) => {
    try {
      const username = request.params.username;
      if (!username) {
        return reply.code(400)
          .header('Content-Type', 'application/json; charset=utf-8')
          .send({ status: false, error: `username is required` })
      } 
      const starred = await github.star(username);
      return { status: true, starred }
    } catch (err) {
      return { status: false, error: err.message };
    }
  });
}

module.exports = controller

