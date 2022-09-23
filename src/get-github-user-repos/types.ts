interface RepoOwner {
  id: number;
  login: string;
}

export interface UserRepo {
  id: number;
  name: string;
  owner: RepoOwner;
  branches_url: string;
  forks_count: number;
}
