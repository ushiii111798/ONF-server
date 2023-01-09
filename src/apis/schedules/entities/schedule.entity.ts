import { Field, ObjectType } from '@nestjs/graphql';
import { Company } from 'src/apis/companies/entities/company.entity';
import { Member } from 'src/apis/members/entities/member.entity';
import { Organization } from 'src/apis/organization/entities/organization.entity';
import { RoleCategory } from 'src/apis/roleCategory/entities/roleCategory.entity';
import { ScheduleCategory } from 'src/apis/scheduleCategories/entities/scheduleCategory.entity';
import { ScheduleTemplate } from 'src/apis/scheduleTemplates/entities/scheduleTemplate.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Schedule {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { nullable: true })
  id: string;

  @Column({ nullable: true })
  @Field(() => String)
  startWorkTime: string;

  @Column({ nullable: true })
  @Field(() => String)
  endWorkTime: string;

  @Column({ nullable: true })
  @Field(() => String)
  memo: string;

  @Column()
  @Field(() => Date)
  date: Date;

  @CreateDateColumn()
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn()
  @Field(() => Date)
  updatedAt: Date;

  @ManyToOne(() => Member)
  @Field(() => Member)
  member: Member;

  @ManyToOne(() => Company)
  @Field(() => Company)
  company: Company;

  @ManyToOne(() => Organization)
  @Field(() => Organization)
  organization: Organization;

  @ManyToOne(() => RoleCategory)
  @Field(() => RoleCategory)
  roleCategory: RoleCategory;

  @ManyToOne(() => ScheduleTemplate)
  @Field(() => ScheduleTemplate)
  scheduleTemplate: ScheduleTemplate;

  @ManyToOne(() => ScheduleCategory)
  @Field(() => ScheduleCategory)
  scheduleCategory: ScheduleCategory;
}
