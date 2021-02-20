import { DbModule } from '@libs/db';
import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersModule } from './users/users.module';
import { CourseModule } from './course/course.module';
import { EpisosesModule } from './episode/episode.module';
import { EpisosesController } from './episode/episode.controller';
@Module({
  imports: [
    DbModule,
    UsersModule,
    CourseModule,
    EpisosesModule,
  ],
  controllers: [AdminController, EpisosesController],
  providers: [AdminService],
})
export class AdminModule {}
