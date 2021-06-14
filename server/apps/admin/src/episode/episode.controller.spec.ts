import { Test, TestingModule } from '@nestjs/testing';
import { EpisosesController } from './episode.controller';

describe('EpisosesController', () => {
  let controller: EpisosesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EpisosesController],
    }).compile();

    controller = module.get<EpisosesController>(EpisosesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
