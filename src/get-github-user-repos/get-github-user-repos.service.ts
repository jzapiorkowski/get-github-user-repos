import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { GetReposInfoService } from 'src/get-repos-info/get-repos-info.service';
import { UserRepos } from './types';

@Injectable()
export class GetGithubUserReposService {
  constructor(private readonly getReposInfoService: GetReposInfoService) {}

  async getUserRepos(username: string): Promise<any> {
    try {
      const { data: userGithubRepos } = await axios.get<UserRepos[]>(
        `https://api.github.com/users/${username}/repos`,
      );

      const allRepos = this.extractUsersRepos(userGithubRepos);

      const reposInfo = await Promise.all(
        allRepos.map((repository) =>
          this.getReposInfoService.getReposInfo(
            repository.branches_url.replace('{/branch}', ''),
          ),
        ),
      );

      return reposInfo;
    } catch (error) {
      return error;
    }
  }

  private extractUsersRepos(repositories: UserRepos[]) {
    return repositories.filter((repo) => repo.forks_count === 0);
  }
}
