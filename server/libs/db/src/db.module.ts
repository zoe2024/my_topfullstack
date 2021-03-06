import { Global, Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { DbService } from './db.service';
import { User } from './modules/user.module'
import { Course } from './modules/course.module'
import { Episode } from './modules/episode.module'

const modules = TypegooseModule.forFeature([User, Course, Episode])
@Global()

@Module({
  imports:[
    TypegooseModule.forRoot( 'mongodb://localhost/my_topfullstack', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }),

    modules,
  ],
  providers: [DbService],
  exports: [DbService, modules],
})
export class DbModule {}
