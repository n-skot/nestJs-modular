import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { OrdersService } from '../services/orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  /*@Get('/')
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
  }*/
}
