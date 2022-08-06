import { Controller, Get } from '@nestjs/common';
import { Redirect } from '@nestjs/common/decorators/http/redirect.decorator';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
