import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from '../projects/project.model';
import { Item } from '../items/item.model';
import { EventImpact } from '../eventImpacts/eventImpact.model';

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

    @Column({ type: 'bigint', nullable: false })
    project_id: string;

    @Column({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()'})
    created_at: Date;

    @Column({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()' })
    updated_at: Date;

    @Column({ type: 'datetime2', nullable: true })
    deleted_at: Date | null;

    @ManyToOne(() => Project, (project) => project.itemGroups, { nullable: false })
    @JoinColumn({ name: 'project_id' })
    project: Project;

    @OneToMany(() => Item, (item) => item.itemGroup)
    items: Item[];

    @OneToMany(() => EventImpact, (impact) => impact.itemGroup)
    impacts: EventImpact[];
}
