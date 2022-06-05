import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './create-user-dto';
import { MailerService } from '@nestjs-modules/mailer';
import { SendMailProducerService } from 'src/jobs/sendMail.producer-service';

@Controller('create-user')
export class CreateUserController {
  constructor(private sendMailService: SendMailProducerService) {}

  @Post('/')
  async createUser(@Body() createUser: CreateUserDto) {
    this.sendMailService.sendMail(createUser);
    return createUser;
  }
}
