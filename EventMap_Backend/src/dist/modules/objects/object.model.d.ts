import { ObjectGroup } from '../objectGroups/objectGroup.model';
import { Project } from '../projects/project.model';
import { EventsImpact } from '../eventImpacts/eventImpact.model';
export declare class ObjectEntity {
    id: string;
    name: string;
    boundary: string;
    description: string;
    object_group_id: number | null;
    project_id: string | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    objectGroup: ObjectGroup | null;
    project: Project | null;
    impacts: EventsImpact[];
}
export { ObjectEntity as Object };
