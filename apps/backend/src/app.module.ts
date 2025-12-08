import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { OwnerModule } from './modules/owner/owner.module';
import { UsersModule } from './modules/users/users.module';
import { PropertyTypeModule } from './modules/property-type/property-type.module';
import { PropertyModule } from './modules/property/property.module';
import { RoleModule } from './modules/role/role.module';
import { DocumentsModule } from './modules/documents/documents.module';
import { AuthService } from './auth/auth.service';
import { RoleService } from './role/role.service';
import { UsersService } from './users/users.service';

@Module({
  imports: [PrismaModule, AuthModule, OwnerModule, UsersModule, PropertyTypeModule, PropertyModule, RoleModule, DocumentsModule],
  controllers: [AppController],
  providers: [AppService, AuthService, RoleService, UsersService],
})
export class AppModule {}
