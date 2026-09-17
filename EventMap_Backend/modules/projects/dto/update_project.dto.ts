import { PartialType } from '@nestjs/swagger';
import { CreateProjectDto } from './create_project.dto';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {}
