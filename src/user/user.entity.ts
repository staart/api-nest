import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IsOptional, IsDefined, IsString, IsNumber, IsBoolean, IsEnum } from "class-validator";
import { CrudValidationGroups } from "@nestjsx/crud";
import { UserRoles, UserGenders, UserNotificationEmails } from "./user.interfaces";

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity()
export class User {
  @IsOptional({ always: true })
  @PrimaryGeneratedColumn()
  id: number;

  @IsOptional({ always: true })
  @IsEnum(UserRoles, { always: true })
  @Column({ type: "int", default: UserRoles.USER })
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
  @IsNumber({}, { always: true })
  @Column({ type: "int" })
  primaryEmailId: number;

  @IsOptional({ always: true })
  @IsEnum(UserNotificationEmails, { always: true })
  @Column({ type: "int", default: UserNotificationEmails.ACCOUNT })
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
}
