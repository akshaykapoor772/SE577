function listRepos() {
  const repos = [
    { name: 'my-repo', description: 'My first repository', url: 'https://github.com/myusername/my-repo' },
    { name: 'my-other-repo', description: 'My second repository', url: 'https://github.com/myusername/my-other-repo' },
    // Add more repositories as needed
  ];
  return repos;
}

export { listRepos };
