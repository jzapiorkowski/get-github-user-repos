import { Module } from '@nestjs/common';
import { GetGithubUserReposController } from './get-github-user-repos.controller';
import { GetGithubUserReposService } from './get-github-user-repos.service';

@Module({
  controllers: [GetGithubUserReposController],
  providers: [GetGithubUserReposService],
  exports: [GetGithubUserReposService],
})
export class GetGithubUserReposModule {}
