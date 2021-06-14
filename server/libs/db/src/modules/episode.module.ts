import { prop, modelOptions, Ref } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { Course } from './course.module';
// import { hashSync } from 'bcryptjs';

// export type UserDocument = DocumentType<User>;

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Episode {
  @ApiProperty({ description: '课时',  example: '课时1'})
  @prop()
  episosesName: string;
  
  @prop()
  file: string

  @prop({ ref: 'Course' })
  course: Ref<Course>

}