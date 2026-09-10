import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ItemGroup } from '../itemGroups/itemGroup.model';
import { Project } from '../projects/project.model';
import { EventsImpact } from '../eventImpacts/eventImpact.model';

@Entity('Items')
export class Item {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: string;

    @Column({ type: 'nvarchar', length: 200, nullable: false })
    name: string;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: false })
    boundary: string;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: false })
    description: string;

    @Column({ type: 'bigint', nullable: true })
    item_group_id: number | null;

    @Column({ type: 'bigint', nullable: false })
    project_id: string;

    @Column({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()'})
    created_at: Date;

    @Column({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()' })
    updated_at: Date;

    @Column({ type: 'datetime2', nullable: true })
    deleted_at: Date | null;

    @ManyToOne(() => ItemGroup, (group) => group.items, { nullable: true })
    @JoinColumn({ name: 'item_group_id' })
    itemGroup: ItemGroup | null;

    @ManyToOne(() => Project, (project) => project.items, { nullable: true })
    @JoinColumn({ name: 'project_id' })
    project: Project | null;

    @OneToMany(() => EventsImpact, (impact) => impact.item)
    impacts: EventsImpact[];
}
