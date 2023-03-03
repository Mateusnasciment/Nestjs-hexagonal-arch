import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
/* The AppController class is a Nest controller that uses the AppService to handle all incoming HTTP
GET requests for the / route */

@Controller('prefixo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getHello(): string {
    return this.appService.getHello();
  }
}
