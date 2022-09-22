import { Test, TestingModule } from '@nestjs/testing';
import { GetGithubUserReposController } from './get-github-user-repos.controller';

describe('GetGithubUserReposController', () => {
  let controller: GetGithubUserReposController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetGithubUserReposController],
    }).compile();

    controller = module.get<GetGithubUserReposController>(
      GetGithubUserReposController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
