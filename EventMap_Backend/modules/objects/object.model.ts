import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectGroup } from '../objectGroups/objectGroup.model';
import { Project } from '../projects/project.model';
import { EventsImpact } from '../eventImpacts/eventImpact.model';

@Entity('Objects')
export class ObjectEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: string;

    @Column({ type: 'nvarchar', length: 200, nullable: false })
    name: string;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: false })
    boundary: string;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: false })
    description: string;

    @Column({ type: 'bigint', nullable: true })
    object_group_id: number | null;

    @Column({ type: 'bigint', nullable: false })
    project_id: string | null;

    @Column({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()'})
    created_at: Date;

    @Column({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()' })
    updated_at: Date;

    @Column({ type: 'datetime2', nullable: true })
    deleted_at: Date | null;

    @ManyToOne(() => ObjectGroup, (group) => group.objects, { nullable: true })
    @JoinColumn({ name: 'object_group_id' })
    objectGroup: ObjectGroup | null;

    @ManyToOne(() => Project, (project) => project.objects, { nullable: true })
    @JoinColumn({ name: 'project_id' })
    project: Project | null;

    @OneToMany(() => EventsImpact, (impact) => impact.object)
    impacts: EventsImpact[];
}

export { ObjectEntity as Object };
