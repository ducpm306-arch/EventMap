import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Account } from './account.model';
import { Map } from './map.model';
import { Event } from './event.model';
import { ObjectEntity } from './object.model';
import { ObjectGroup } from './objectGroup.model';

@Entity('Projects')
export class Project {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: string;

    @Column({ type: 'nvarchar', length: 200, nullable: false })
    name: string;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: false })
    description: string;

    @Column({ type: 'bigint', nullable: false })
    map_id: string;

    @Column({ type: 'bigint', nullable: false })
    account_id: string;

    @Column({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()'})
    created_at: Date;

    @Column({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()' })
    updated_at: Date;

    @Column({ type: 'datetime2', nullable: true })
    deleted_at: Date | null;

    @ManyToOne(() => Map, (map) => map.projects)
    @JoinColumn({ name: 'map_id' })
    map: Map;

    @ManyToOne(() => Account, (account) => account.projects)
    @JoinColumn({ name: 'account_id' })
    account: Account;

    @OneToMany(() => Event, (event) => event.project)
    events: Event[];

    @OneToMany(() => ObjectEntity, (object) => object.project)
    objects: ObjectEntity[];

    @OneToMany(() => ObjectGroup, (group) => group.project)
    objectGroups: ObjectGroup[];
}
