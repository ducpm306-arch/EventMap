import { Body, Controller } from "@nestjs/common";
import { ProjectDto } from "./dto/project.dto";
import { Project } from "./project.model";

@Controller('projects')
export class ProjectController {
    constructor(private readonly projectService: ProjectService)

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
        return this.projectService.updateProject(id, dto);
    }

    @Delete('/:id')
    deleteProject(@Param(id) id: string) {
        return this.projectService.deleteProject(id);
    }
}