import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { CreateUserDto } from 'src/create-user/create-user-dto';

@Injectable()
class SendMailProducerService {
  constructor(@InjectQueue('sendMail-queue') private queue: Queue) {}

  async sendMail(createUserDTO: CreateUserDto) {
    await this.queue.add('sendMail-job', createUserDTO, {
      delay: 5000, //starts only after 5 secs
    });
  }
}

export { SendMailProducerService };
