import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProjectDto } from './dto/create_project.dto';
import { ProjectService } from './project.service';
import { UpdateProjectDto } from './dto/update_project.dto';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  getProject() {
    return this.projectService.getProject();
  }

  @Post()
  createProject(@Body() dto: CreateProjectDto) {
    return this.projectService.createProject(dto);
  }

  @Get('/:id')
  detailProject(@Param('id') id: string) {
    return this.projectService.detailProject(id);
  }

  @Put('/:id')
  updateProject(@Body() dto: UpdateProjectDto, @Param('id') id: string) {
    return this.projectService.updateProject(dto, id);
  }

  @Delete('/:id')
  deleteProject(@Param('id') id: string) {
    return this.projectService.deleteProject(id);
  }
}
