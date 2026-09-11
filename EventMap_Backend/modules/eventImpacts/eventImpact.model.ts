import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from '../events/event.model';
import { ItemGroup } from '../itemGroups/itemGroup.model';
import { Item } from '../items/item.model';

@Entity('EventsImpacts')
export class EventImpact {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: string;

    @Column({ type: 'bigint', nullable: false })
    event_id: string;

    @Column({ type: 'bigint', nullable: true })
    item_group_id: string | null;

    @Column({ type: 'bigint', nullable: true })
    item_id: string | null;
    
    @Column({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()'})
    created_at: Date;

    @Column({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()' })
    updated_at: Date;

    @Column({ type: 'datetime2', nullable: true })
    deleted_at: Date | null;

    @ManyToOne(() => Event, (event) => event.impacts)
    @JoinColumn({ name: 'event_id' })
    event: Event;

    @ManyToOne(() => ItemGroup, (group) => group.impacts, { nullable: true })
    @JoinColumn({ name: 'item_group_id' })
    itemGroup: ItemGroup | null;

    @ManyToOne(() => Item, (item) => item.impacts, { nullable: true })
    @JoinColumn({ name: 'item_id' })
    item: Item | null;
}
