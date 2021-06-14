import { prop, modelOptions, DocumentType, arrayProp, Ref } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.module';
import { Episode } from './episode.module';
// import { hashSync } from 'bcryptjs';

export type UserDocument = DocumentType<User>;



@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Course {
  @ApiProperty({ description: '课程',  example: '课程1'})
  @prop()
  courseName: string;

  @ApiProperty({ description: '封面图', example: '封面1' })
  @prop()
  cover: string;

  @arrayProp({
    ref: 'Episode',
    localField: '_id',
    foreignField: 'course',
  })
  episodes: Ref<Episode>[];
}