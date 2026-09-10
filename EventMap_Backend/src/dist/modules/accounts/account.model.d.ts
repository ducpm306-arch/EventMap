import { Project } from '../projects/project.model';
export declare class Account {
    id: string;
    name: string;
    email: string;
    password_hash: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    projects: Project[];
}
