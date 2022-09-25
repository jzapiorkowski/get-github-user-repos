import { HttpException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { BranchType, BranchInfo } from './types';

@Injectable()
export class GetReposInfoService {
  async getBranchInfo(branchUrl: string): Promise<BranchInfo[]> {
    try {
      const { data: branchesList } = await axios.get<BranchType[]>(branchUrl);

      const preparedBranchesInfo = branchesList.map((branch) => ({
        name: branch.name,
        sha: branch.commit.sha,
      }));

      return preparedBranchesInfo;
    } catch (error) {
      throw new HttpException(
        error.message,
        parseInt(error.response.status, 10),
      );
    }
  }
}
