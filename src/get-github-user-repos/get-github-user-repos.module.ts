import { Module } from '@nestjs/common';
import { GetReposInfoModule } from 'src/get-repos-info';
import { GetGithubUserReposController } from './get-github-user-repos.controller';
import { GetGithubUserReposService } from './get-github-user-repos.service';

@Module({
  imports: [GetReposInfoModule],
  controllers: [GetGithubUserReposController],
  providers: [GetGithubUserReposService],
  exports: [GetGithubUserReposService],
})
export class GetGithubUserReposModule {}
