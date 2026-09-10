import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from '../events/event.model';
import { ObjectGroup } from '../objectGroups/objectGroup.model';
import { Object } from '../objects/object.model';

@Entity('EventsImpacts')
export class EventsImpact {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: string;

    @Column({ type: 'bigint', nullable: false })
    event_id: string;

    @Column({ type: 'bigint', nullable: true })
    object_group_id: string | null;

    @Column({ type: 'bigint', nullable: true })
    object_id: string | null;
    
    @Column({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()'})
    created_at: Date;

    @Column({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()' })
    updated_at: Date;

    @Column({ type: 'datetime2', nullable: true })
    deleted_at: Date | null;

    @ManyToOne(() => Event, (event) => event.impacts)
    @JoinColumn({ name: 'event_id' })
    event: Event;

    @ManyToOne(() => ObjectGroup, (group) => group.impacts, { nullable: true })
    @JoinColumn({ name: 'object_group_id' })
    objectGroup: ObjectGroup | null;

    @ManyToOne(() => Object, (object) => object.impacts, { nullable: true })
    @JoinColumn({ name: 'object_id' })
    object: Object | null;
}
