import { CreateProductDto } from './product.dto';

describe('ProductDto', () => {
  it('should be defined', () => {
    expect(new CreateProductDto()).toBeDefined();
  });
});
