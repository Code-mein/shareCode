import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Starting tag')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/Hello")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/Hi")
  getHi(): string {
    return this.appService.getHello();
  }
}
