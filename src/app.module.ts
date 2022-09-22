import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetGithubUserReposModule } from './get-github-user-repos/get-github-user-repos.module';

@Module({
  imports: [HttpModule, GetGithubUserReposModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
