import { Injectable } from '@nestjs/common';

@Injectable()
export class GetGithubUserReposService {
  getUserRepos(): string {
    return 'hi there!';
  }
}
