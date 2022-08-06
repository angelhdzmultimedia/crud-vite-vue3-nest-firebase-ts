import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators/http/route-params.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response): void {
    return res.redirect('https://node-9dvwhs--5000.local.webcontainer.io');
  }
}
