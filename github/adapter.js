exports.transformRepoItem = (repoItem) => {
  const { id, name, description, url, language } = repoItem;

  return {
    id,
    name,
    description,
    url,
    language,
  };
};
