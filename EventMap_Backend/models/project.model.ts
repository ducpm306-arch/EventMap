import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('projects')
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    map_id: number;

    @Column()
    account_id: number;

    @Column()
    created_at: Date;
    
    @Column()
    updated_at: Date;
    
    @Column()
    deleted_at: Date;
}
