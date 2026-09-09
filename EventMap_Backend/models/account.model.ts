import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from './project.model';

@Entity('Accounts')
export class Account {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

  @Column({ type: 'nvarchar', length: 200, nullable: false })
  name: string;

  @Column({ type: 'nvarchar', length: 200, nullable: false, unique: true })
  email: string;

  @Column({ type: 'nvarchar', length: 200, nullable: false })
  password_hash: string;

  @Column({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()' })
  created_at: Date;

  @Column({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()' })
  updated_at: Date;

  @Column({ type: 'datetime2', nullable: true })
  deleted_at: Date | null;

  @OneToMany(() => Project, (project) => project.account)
  projects: Project[];
}
