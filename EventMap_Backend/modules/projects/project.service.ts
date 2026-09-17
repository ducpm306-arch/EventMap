import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './project.model';
import { CreateProjectDto } from './dto/create_project.dto';
import { UpdateProjectDto } from './dto/update_project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepo: Repository<Project>,
  ) {}

  getProject(): Promise<Project[]> {
    return this.projectRepo.find();
  }

  createProject(dto: CreateProjectDto): Promise<Project> {
    const project = this.projectRepo.create(dto);
    return this.projectRepo.save(project);
  }

  detailProject(id: string): Promise<Project | null> {
    return this.projectRepo.findOneBy({ id });
  }

  async updateProject(
    dto: UpdateProjectDto,
    id: string,
  ): Promise<Project | null> {
    await this.projectRepo.update(id, dto);
    return this.detailProject(id);
  }

  async deleteProject(id: string): Promise<boolean> {
    const result = await this.projectRepo.delete(id);
    return (result.affected ?? 0) > 0;
  }
}
