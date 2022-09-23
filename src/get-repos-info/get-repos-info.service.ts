import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GetReposInfoService {
  async getReposInfo(branchUrl: string) {
    try {
      const { data } = await axios.get(branchUrl);

      return data;
    } catch (error) {
      return error;
    }
  }
}
