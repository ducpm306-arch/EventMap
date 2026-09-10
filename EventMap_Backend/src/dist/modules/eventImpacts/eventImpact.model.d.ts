import { Event } from '../events/event.model';
import { ObjectGroup } from '../objectGroups/objectGroup.model';
import { ObjectEntity } from '../objects/object.model';
export declare class EventsImpact {
    id: string;
    event_id: string;
    object_group_id: string | null;
    object_id: string | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    event: Event;
    objectGroup: ObjectGroup | null;
    object: ObjectEntity | null;
}
