import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UsersService {
  private _users: UserEntity[];

  constructor(private configService: ConfigService) {
    this._users = [
      {
        id: 1,
        email: 'user1@example.com',
        orders: [],
        username: 'user1',
      },
      {
        id: 2,
        email: 'user2@example.com',
        orders: [],
        username: 'user2',
      },
    ];
  }

  getAll() {
    const key = this.configService.get('API_KEY');
    const db = this.configService.get('DATABASE_NAME');
    console.log(key, db);
    return this._users;
  }

  getById(id: number) {
    return this._users.find((user) => user.id === id);
  }

  create(users: UserEntity) {
    this._users.push(users);
    return users;
  }

  update(id: number, updatedProduct: UserEntity) {
    const productIndex = this._users.findIndex((user) => user.id === id);
    if (productIndex !== -1) {
      this._users[productIndex] = {
        ...this._users[productIndex],
        id,
        ...updatedProduct,
      };
      return this._users[productIndex];
    }
    return null;
  }

  delete(id: number) {
    const productIndex = this._users.findIndex((user) => user.id === id);
    if (productIndex !== -1) {
      this._users.splice(productIndex, 1);
      return true;
    }
    return false;
  }
}
