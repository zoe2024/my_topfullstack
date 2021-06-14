import { Episode } from '@libs/db/modules/episode.module';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
    model: Episode
})

@Controller('episode')

@ApiTags('课时')
export class EpisosesController {
    constructor(@InjectModel(Episode) private readonly model) {

    }

}
