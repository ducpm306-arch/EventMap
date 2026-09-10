import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from '../projects/project.model';
import { Item } from '../items/item.model';
import { EventsImpact } from '../eventImpacts/eventImpact.model';

@Entity('ItemGroups')
export class ItemGroup {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: string;

    @Column({ type: 'nvarchar', length: 200, nullable: false })
    name: string;

    @Column({ type: 'char', length: 7, nullable: false })
    color_hex: string;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: false })
    description: string;

    @Column({ type: 'bigint', nullable: true })
    project_id: string | null;

    @Column({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()'})
    created_at: Date;

    @Column({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()' })
    updated_at: Date;

    @Column({ type: 'datetime2', nullable: true })
    deleted_at: Date | null;

    @ManyToOne(() => Project, (project) => project.itemGroups, { nullable: true })
    @JoinColumn({ name: 'project_id' })
    project: Project | null;

    @OneToMany(() => Item, (item) => item.itemGroup)
    items: Item[];

    @OneToMany(() => EventsImpact, (impact) => impact.itemGroup)
    impacts: EventsImpact[];
}
