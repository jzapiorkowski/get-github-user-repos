import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GetGithubUserReposModule } from './get-github-user-repos';

@Module({
  imports: [HttpModule, GetGithubUserReposModule],
})
export class AppModule {}
