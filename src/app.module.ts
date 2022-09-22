import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetGithubUserReposController } from './get-github-user-repos/get-github-user-repos.controller';
import { GetGithubUserReposService } from './get-github-user-repos/get-github-user-repos.service';

@Module({
  imports: [],
  controllers: [AppController, GetGithubUserReposController],
  providers: [AppService, GetGithubUserReposService],
})
export class AppModule {}
