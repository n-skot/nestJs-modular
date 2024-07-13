import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('/')
  @ApiOperation({ summary: 'List of Products' })
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.productsService.getAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.getById(id);
  }

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  create(product: CreateProductDto) {
    const newProduct = {
      id: 12345,
      ...product,
    };
    this.productsService.create(newProduct);
  }

  @Patch('/:id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    const product = this.productsService.getById(id);
    if (!product) {
      throw new Error(`Product with ID ${id} not found.`);
    }
    return { ...product, ...updateProductDto };
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id', ParseIntPipe) id: number) {
    const deleted = this.productsService.delete(id);
    if (!deleted) {
      throw new Error(`Product with ID ${id} not found.`);
    }
    return { id };
  }
}
