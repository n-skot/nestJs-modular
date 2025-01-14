import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'name of a product' })
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  stock: number;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  imageUrl: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
