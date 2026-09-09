import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('events')
export class Event{
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    event_date: Date;

    @Column()
    description: string;

    @Column()
    project_id: number;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @Column()
    deleted_at: Date;
}