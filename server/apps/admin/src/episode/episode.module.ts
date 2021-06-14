import { Module } from '@nestjs/common';
import { EpisosesController } from './episode.controller';

@Module({
  controllers: [EpisosesController]
})
export class EpisosesModule {}
