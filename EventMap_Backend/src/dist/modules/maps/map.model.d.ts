import { Project } from '../projects/project.model';
export declare class Map {
    id: string;
    name: string;
    map_url: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    projects: Project[];
}
