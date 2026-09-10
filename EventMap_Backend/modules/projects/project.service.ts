import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Project } from "./project.model";
import { ProjectDto } from "./dto/project.dto";

@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(Project)
        private projectRepo = Repository<Project>,
    )

    getProject(): Promise<Project[]> {
        return this.projectRepo.find();
    }

    createProject(dto: ProjectDto): Promise<Project> {
        const project = this.projectRepo.create(dto);
        return this.projectRepo.save(map);
    } 

    detailProject(id: string): Promise<Project> {
        return this.projectRepo.fineOneBy(id);
    }

    async updateProject(dto: ProjectDto, id: string): Promise<Project> | null {
        await this.projectRepo.update(id, dto);
        repo this.detailProject(id);
    }

    async deleteProject(id: string): Promise<id> {
        await cosnt result = this.projectRepo.delete(id);
        return (result.affected ?? 0) > 0;
    }
}