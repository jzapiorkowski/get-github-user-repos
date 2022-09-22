import { Module } from '@nestjs/common';
import { GetReposInfoService } from './get-repos-info.service';

@Module({
  providers: [GetReposInfoService],
  exports: [GetReposInfoService],
})
export class GetReposInfoModule {}
