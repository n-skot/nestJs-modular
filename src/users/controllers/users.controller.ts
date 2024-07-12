import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { OrderEntity } from 'src/orders/entities/order.entity';
import { ProductsService } from 'src/products/services/products.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly productsService: ProductsService,
  ) {}

  @Get('/')
  getAll() {
    return this.usersService.getAll();
  }

  @Get('/:id')
  getById(id: number) {
    return this.usersService.getById(id);
  }

  @Post('/')
  create(user: any) {
    return this.usersService.create(user);
  }

  @Patch('/:id')
  update(id: number, user: any) {
    return this.usersService.update(id, user);
  }

  @Delete('/:id')
  delete(id: number) {
    return this.usersService.delete(id);
  }

  @Get('/:id/orders')
  getOrdersByUser(@Param('id', ParseIntPipe) id: number): OrderEntity {
    const user = this.usersService.getById(id);
    return {
      date: new Date(),
      user,
      products: this.productsService.getAll(),
    };
  }
}
