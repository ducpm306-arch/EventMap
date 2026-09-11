import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProjectDto } from "./dto/project.dto";
import { ProjectService } from "./project.service";

@Controller('projects')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) {}

    @Get()
    getProject() {
        return this.projectService.getProject();
    }

    @Post()
    createProject(@Body() dto: ProjectDto) {
        return this.projectService.createProject(dto);
    }

    @Get('/:id')
    detailProject(@Param('id') id : string) {
        return this.projectService.detailProject(id);
    }

    @Put('/:id')
    updateProject(@Body() dto: ProjectDto, @Param('id') id: string) {
        return this.projectService.updateProject(dto, id);
    }

    @Delete('/:id')
    deleteProject(@Param('id') id: string) {
        return this.projectService.deleteProject(id);
    }
}
