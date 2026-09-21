import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from '../projects/project.model';

@Entity('Accounts')
export class Account {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

  @Column({ type: 'varchar', length: 200, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 200, nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 200, nullable: false })
  password_hash: string;

  @Column({
    type: 'datetime',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;

  @Column({
    type: 'datetime',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  @Column({ type: 'datetime', nullable: true })
  deleted_at: Date | null;

  @OneToMany(() => Project, (project) => project.account)
  projects: Project[];
}
