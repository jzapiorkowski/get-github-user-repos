import { Injectable } from '@nestjs/common';

import axios from 'axios';

@Injectable()
export class GetGithubUserReposService {
  async getUserRepos(username: string) {
    try {
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos`,
      );

      return res.data;
    } catch (error) {
      return error;
    }
  }
}
