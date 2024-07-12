import { OrderEntity } from 'src/orders/entities/order.entity';

export class UserEntity {
  id: number;
  email: string;
  orders: OrderEntity[];
  username: string;
}
