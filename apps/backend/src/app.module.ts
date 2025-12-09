import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { OwnerModule } from './modules/propertyOwner/owner.module';
import { UsersModule } from './modules/users/users.module';
import { PropertyModule } from './modules/property/property.module';
import { PropertyRegistrationModule } from './modules/property-registration/property-registration.module';



@Module({
  imports: [PrismaModule, AuthModule, OwnerModule, UsersModule, PropertyModule, PropertyRegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
