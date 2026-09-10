import { Account } from '../accounts/account.model';
import { Map } from '../maps/map.model';
import { Event } from '../events/event.model';
import { ObjectEntity } from '../objects/object.model';
import { ObjectGroup } from '../objectGroups/objectGroup.model';
export declare class Project {
    id: string;
    name: string;
    description: string;
    map_id: string;
    account_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    map: Map;
    account: Account;
    events: Event[];
    objects: ObjectEntity[];
    objectGroups: ObjectGroup[];
}
