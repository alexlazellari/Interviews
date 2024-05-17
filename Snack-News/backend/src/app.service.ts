import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello, welcome to SnackNews! You probably want to go to /articles.';
  }
}
