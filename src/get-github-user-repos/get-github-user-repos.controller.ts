import { ResponseRepoType } from './types';
import { Controller, Get, Param } from '@nestjs/common';
import { GetGithubUserReposService } from './get-github-user-repos.service';

@Controller('github/user')
export class GetGithubUserReposController {
  constructor(
    private readonly getGithubUserReposService: GetGithubUserReposService,
  ) {}

  @Get(':username/repos')
  getUserRepos(
    @Param('username') username: string,
  ): Promise<ResponseRepoType[]> {
    return this.getGithubUserReposService.getUserRepos(username);
  }
}
