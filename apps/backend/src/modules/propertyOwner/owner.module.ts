import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PropertyOwnerController } from './property-owner.controller';

@Module({
  controllers: [PropertyOwnerController],
  providers: [OwnerService,PrismaService]
})
export class OwnerModule {}
