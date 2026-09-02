import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class JoinClassroomDto {
  @IsString()
  @IsNotEmpty()
  code!: string; // 방 코드

  @IsUUID()
  userId!: string; // 사용자 ID

  @IsString()
  @IsNotEmpty()
  userName!: string; // 사용자 이름
}
