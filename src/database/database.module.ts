import { Module, Global } from '@nestjs/common';

const API_KEY = '12345678';
const API_KEY_PR = 'PRODUCC12345678';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'produccion' ? API_KEY_PR : API_KEY,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
