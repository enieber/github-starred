exports.transformRepoItem = (repoItem) => {
  if (!repoItem) {
    throw new TypeError("the repoItem not be undefined");
  }
  const { id, name, description, url, language } = repoItem;

  if (!id || !name || !url) {
    throw new TypeError("the object in repoItem is not be undefined");
  }

  return {
    id,
    name,
    description,
    url,
    language,
  };
};
