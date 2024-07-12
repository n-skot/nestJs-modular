import { ProductEntity } from 'src/products/entities/product.entity';
import { UserEntity } from 'src/users/entities/user.entity';

export class OrderEntity {
  date: Date;
  user: UserEntity;
  products: ProductEntity[];
}
