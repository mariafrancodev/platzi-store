import { Controller, Get, Param, Query } from '@nestjs/common';
import { get } from 'http';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('name')
  newEndpoint() {
    return 'Aleja!<3';
  }
}
