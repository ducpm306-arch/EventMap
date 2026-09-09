import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('entities')
export class Entity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    boundary: string;

    @Column()
    description: string;

    @Column()
    entity_group_id: number;

    @Column()
    project_id: number;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @Column()
    deleted_at: Date;
}
