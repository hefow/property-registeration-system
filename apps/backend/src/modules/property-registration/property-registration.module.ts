import { Module } from '@nestjs/common';
import { PropertyRegistrationService } from './property-registration.service';
import { PropertyRegistrationController } from './property-registration.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PropertyRegistrationService,PrismaService],
  controllers: [PropertyRegistrationController]
})
export class PropertyRegistrationModule {}
