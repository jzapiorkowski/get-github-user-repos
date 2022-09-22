import { Injectable } from '@nestjs/common';

import axios from 'axios';
import { GetReposInfoService } from 'src/get-repos-info/get-repos-info.service';

@Injectable()
export class GetGithubUserReposService {
  constructor(private readonly getReposInfoService: GetReposInfoService) {}

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
