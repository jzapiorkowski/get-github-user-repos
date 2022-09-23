import { BranchInfo } from 'src/get-repos-info/types';

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

export interface ResponseRepoType {
  name: UserRepo['name'];
  ownerLogin: RepoOwner['login'];
  branches: BranchInfo[];
}
