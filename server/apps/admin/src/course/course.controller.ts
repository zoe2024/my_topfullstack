import { Course } from '@libs/db/modules/course.module';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
    model: Course
})

@Controller('course')
@ApiTags('课程')
export class CourseController {
    constructor(@InjectModel(Course) private readonly model) {

    }

}
