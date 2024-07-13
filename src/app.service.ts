import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config/config';

@Injectable()
export class AppService {
  constructor(
    //@Inject('API_KEY') private _apiKey: string,
    @Inject('TASKS') private _tasks: any[],
    @Inject(config.KEY) private _config: ConfigType<typeof config>,
  ) {}

  getHello(): string {
    //const env = this._configService.get<string>('API_KEY');
    //const db = this._configService.get<string>('DATABASE_NAME');
    const env = this._config.API_KEY;
    const db = this._config.DATABASE.DATABASE_NAME;
    console.log(env);
    console.log(this._tasks);
    return `Hello World! - ${env} - en ${db}`;
  }
}
