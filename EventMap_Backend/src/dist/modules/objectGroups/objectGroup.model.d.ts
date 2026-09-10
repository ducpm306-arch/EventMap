import { Project } from '../projects/project.model';
import { ObjectEntity } from '../objects/object.model';
import { EventsImpact } from '../eventImpacts/eventImpact.model';
export declare class ObjectGroup {
    id: string;
    name: string;
    color_hex: string;
    description: string;
    project_id: string | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    project: Project | null;
    objects: ObjectEntity[];
    impacts: EventsImpact[];
}
