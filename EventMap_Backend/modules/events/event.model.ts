import { Column, Entity, ManyToOne, OneToMany, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from '../projects/project.model';
import { EventImpact } from '../eventImpacts/eventImpact.model';

@Entity('Events')
export class Event{
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: string;

    @Column({type: 'nvarchar', length: 200, nullable: false})
    name: string;

    @Column({type: 'date', nullable: false})
    event_date: Date;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: false })
    description: string;

    @Column({type: 'bigint', nullable: false})
    project_id: string;

    @Column({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()'})
    created_at: Date;

    @Column({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()' })
    updated_at: Date;

    @Column({ type: 'datetime2', nullable: true })
    deleted_at: Date | null;

    @ManyToOne(() => Project, (project) => project.events)
    @JoinColumn({ name: 'project_id' })
    project: Project;

    @OneToMany(() => EventImpact, (impact) => impact.event)
    impacts: EventImpact[];
}
