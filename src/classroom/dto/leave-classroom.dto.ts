import { IsString, IsNotEmpty } from 'class-validator';

export class LeaveClassroomDto {
  @IsString()
  @IsNotEmpty()
  code!: string;
}
