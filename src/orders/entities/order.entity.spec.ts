import { OrderEntity } from './order.entity';

describe('Order', () => {
  it('should be defined', () => {
    expect(new OrderEntity()).toBeDefined();
  });
});
