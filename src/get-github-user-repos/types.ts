interface RepoOwner {
  id: number;
  login: string;
}

export interface UserRepos {
  id: number;
  name: string;
  owner: RepoOwner;
  branches_url: string;
  forks_count: number;
}
