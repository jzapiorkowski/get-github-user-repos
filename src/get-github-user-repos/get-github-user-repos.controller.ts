import { Controller, Get, Param } from '@nestjs/common';
import { GetGithubUserReposService } from './get-github-user-repos.service';

@Controller('github/user')
export class GetGithubUserReposController {
  constructor(
    private readonly getGithubUserReposService: GetGithubUserReposService,
  ) {}

  @Get(':id/repos')
  getUserRepos(@Param('id') userId: string) {
    return this.getGithubUserReposService.getUserRepos();
  }
}
