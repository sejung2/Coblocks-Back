import { IsUUID } from 'class-validator';

export class SelectProblemDto {
  @IsUUID()
  questId!: string;
}
