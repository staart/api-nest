import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { IsOptional, IsDefined, IsString, IsBoolean } from "class-validator";
import { CrudValidationGroups } from "@nestjsx/crud";
import {
  UserRoles,
  UserGenders,
  UserNotificationEmails
} from "./user.interfaces";
import { Contact } from "../contact/contact.entity";

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity()
export class User {
  @IsOptional({ always: true })
  @PrimaryGeneratedColumn()
  id: number;

  @IsOptional({ always: true })
  @IsString({ always: true })
  @Column({ unique: true })
  username: string;

  @IsOptional({ always: true })
  @IsString({ always: true })
  @Column({ length: "4", default: UserRoles.USER })
  role: UserRoles;

  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @IsString({ always: true })
  @Column()
  name: string;

  @IsOptional({ always: true })
  @IsString({ always: true })
  @Column()
  nickname: string;

  @IsOptional({ always: true })
  @IsString({ always: true })
  @Column({ length: "1", default: UserGenders.UNKNOWN })
  gender: UserGenders;

  /**
   * Emails and notifications
   */

  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @OneToMany(
    type => Contact,
    contact => contact.user,
    { onDelete: "NO ACTION" }
  )
  contacts: Contact[];

  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @OneToOne(type => Contact, {
    nullable: true,
    onDelete: "RESTRICT"
  })
  @JoinColumn()
  primaryEmail: Contact;

  @IsOptional({ always: true })
  @IsString({ always: true })
  @Column({ length: "3", default: UserNotificationEmails.ACCOUNT })
  notificationEmails: UserNotificationEmails;

  /**
   * Security
   */

  @IsOptional({ always: true })
  @IsString({ always: true })
  @Column({ nullable: true })
  password: string;

  @IsOptional({ always: true })
  @IsBoolean({ always: true })
  @Column({ type: "boolean", default: false })
  twoFactorEnabled: boolean;

  @IsOptional({ always: true })
  @IsString({ always: true })
  @Column({ nullable: true })
  twoFactorSecret: string;

  @IsOptional({ always: true })
  @IsBoolean({ always: true })
  @Column({ type: "boolean", default: false })
  checkLocationOnLogin: boolean;

  /**
   * Locale settings
   */

  @IsOptional({ always: true })
  @IsString({ always: true })
  @Column({ nullable: true })
  countryCode: string;

  @IsOptional({ always: true })
  @IsString({ always: true })
  @Column({ default: "en-us" })
  preferredLanguage: string;

  @IsOptional({ always: true })
  @IsString({ always: true })
  @Column({ nullable: true })
  timezone: string;

  /**
   * Accessibility preferences
   */

  @IsOptional({ always: true })
  @IsBoolean({ always: true })
  @Column({ type: "boolean", default: false })
  prefersReducedMotion: boolean;

  @IsOptional({ always: true })
  @IsBoolean({ always: true })
  @Column({ type: "boolean", default: false })
  prefersColorSchemeDark: boolean;

  /**
   * Created and updated times
   */

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
