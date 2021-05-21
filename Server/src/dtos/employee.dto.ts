import { IsEmail, IsString, IsArray } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  public email: string;

  @IsString()
  public firstName: string;

  @IsString()
  public lastName: string;

  @IsString()
  public dateOfBirth: string;
  @IsString()
  public jobTitle: string;
  @IsString()
  public company: string;
  @IsArray()
  public country: [];
}
