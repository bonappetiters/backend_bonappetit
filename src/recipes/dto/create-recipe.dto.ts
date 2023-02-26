/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { ObjectId } from 'mongoose';

export class CreateRecipeDto {
  @ApiProperty({
    example: 'tostada',
  })
  title: string;

  @ApiProperty({
    example: 'rodaja de pan tostada',
  })
  description: string;

  @ApiProperty({
    example: '63d9049bee15be130124a938',
  })
  author: ObjectId;

  @ApiProperty({
    example: [
      {ingredient:"63d0e7a3d465ce8c3453c972",qty:300}
    ]
  })
  ingredients: Array<{ingredient:mongoose.Types.ObjectId,qty:number}>;

  @ApiProperty({
    example: 2,
  })
  time: number;

  @ApiProperty({
    example: false,
  })
  is_private: boolean;

  @ApiProperty({
    example: ['vegana', 'fácil', 'desayuno'],
  })
  tags: Array<string>;

    @ApiProperty({
    example: "Breakfast",
  })
  mealType: string;

  @ApiProperty({
    example: "https://domain.com/api/v1/1-image.png"
  })
  image: string;
}
