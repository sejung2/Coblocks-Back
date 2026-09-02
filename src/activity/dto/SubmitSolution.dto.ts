import { IsNotEmpty, IsString } from 'class-validator';

export class SubmitSolutionDto {
  @IsString()
  @IsNotEmpty()
  submissionContent!: string; // Blockly 데이터
}
