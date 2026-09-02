import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateClassroomDto {
  @IsUUID()
  id!: string;

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  code!: string;

  @IsUUID()
  managerId!: string;

  @IsString()
  @IsNotEmpty()
  managerName!: string;
}
