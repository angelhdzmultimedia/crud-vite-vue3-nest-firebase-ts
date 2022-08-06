import { Controller, Get } from '@nestjs/common';
import { Redirect } from '@nestjs/common/decorators/http/redirect.decorator';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect('https://node-9dvwhs--5000.local.webcontainer.io', 200)
  getHello(): string {
    return this.appService.getHello();
  }
}
