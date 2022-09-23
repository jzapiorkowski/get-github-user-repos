import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { GetReposInfoService } from 'src/get-repos-info/get-repos-info.service';
import { ResponseRepoType, UserRepo } from './types';

@Injectable()
export class GetGithubUserReposService {
  constructor(private readonly getReposInfoService: GetReposInfoService) {}

  async getUserRepos(username: string): Promise<ResponseRepoType[]> {
    try {
      const { data: userGithubRepos } = await axios.get<UserRepo[]>(
        `https://api.github.com/users/${username}/repos`,
      );

      const allRepos = this.extractUsersRepos(userGithubRepos);

      const reposInfo = await Promise.all(
        allRepos.map((repository) => this.prepareMappedInfo(repository)),
      );

      return reposInfo;
    } catch (error) {
      return error;
    }
  }

  private extractUsersRepos(repositories: UserRepo[]): UserRepo[] {
    return repositories.filter((repo) => repo.forks_count === 0);
  }

  private async prepareMappedInfo(
    repository: UserRepo,
  ): Promise<ResponseRepoType> {
    const {
      name,
      owner: { login },
    } = repository;

    const branchesInfo = await this.getReposInfoService.getBranchInfo(
      repository.branches_url.replace('{/branch}', ''),
    );

    return {
      name,
      ownerLogin: login,
      branches: branchesInfo,
    };
  }
}
