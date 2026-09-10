import { Project } from '../projects/project.model';
import { EventsImpact } from '../eventImpacts/eventImpact.model';
export declare class Event {
    id: string;
    name: string;
    event_date: Date;
    description: string;
    project_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    project: Project;
    impacts: EventsImpact[];
}
