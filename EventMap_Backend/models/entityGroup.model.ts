import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('entityGroups')
export class EntityGroup {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    color_hex: string;

    @Column()
    description: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @Column()
    deleted_at: Date;
}
