/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
import { User } from '../../users/schemas/user.schema';

export class CreateRecipeDto {
  @ApiProperty({ example: 'Me encantó' })
  readonly title: string;

  @ApiProperty({ example: 'Una gran receta para dias de frio' })
  readonly description: string;

  @ApiProperty({ example: '63f55008c7370e94bcf93d3b' })
  readonly author: ObjectId;

  @ApiProperty({ example: '' })
  ingredients: Array<{ 
    ingredient: ObjectId, 
    qty: number }>;

  @ApiProperty({ example: 120 })
  readonly time: number;

  @ApiProperty({ example: 'false' })
  readonly is_private: boolean;  

  @ApiProperty({ example: 'easy' })
  readonly difficulty: string;    

  @ApiProperty({ example: '[spansih,mediterranean]' })
  readonly keywords: Array<string>;

  @ApiProperty({ example: 'breakfast' })
  readonly mealType: string;  

  @ApiProperty({ example: 'http://domain.com/image.png' })
  readonly image: string;   

}