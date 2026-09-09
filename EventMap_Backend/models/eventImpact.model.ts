import { Entity, PrimaryColumn } from "typeorm";

@Entity('eventsImpacts')
export class EventsImpact {
    @PrimaryColumn()
    id: number;

    @Column()
    event_id: number;

    @Column()
    entity_group_id: number;

    @Column()
    entity_id: number;
    
    @Column()
    created_at: Date;
    
    @Column()
    updated_at: Date;
    
    @Column()
    deleted_at: Date;
}