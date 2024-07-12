import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private _apiKey: string,
    @Inject('TASKS') private _tasks: any[],
    private _configService: ConfigService,
  ) {}

  getHello(): string {
    const env = this._configService.get<string>('API_KEY');
    const db = this._configService.get<string>('DATABASE_NAME');
    console.log(env);
    console.log(this._tasks);
    return `Hello World! ${this._apiKey} - ${env} - en ${db}`;
  }
}
