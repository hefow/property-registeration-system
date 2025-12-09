import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PropertyRegistrationDto } from './property-registration.dto';
import { PropertyRegistrationService } from './property-registration.service';

@Controller('property-registration')
export class PropertyRegistrationController {
    constructor(private propertyRegistrationService: PropertyRegistrationService) { }

@Get()
async getAllPropertyRegistrations(
  @Query('page') page: string,
  @Query('limit') limit: string,
) {
  return this.propertyRegistrationService.getAllPropertyRegistrations(
    Number(page) || 1,
    Number(limit) || 10,
  );
}

    @Post()
    async createPropertyRegistration(@Body() data: PropertyRegistrationDto) {
        return this.propertyRegistrationService.createPropertyRegistration(data);
    }

    @Get("/:id")
    async getPropertyRegistrationById(@Param("id") id: string) {
        return this.propertyRegistrationService.getPropertyRegistrationById(id);
    }

    @Patch("/:id")
    async updatePropertyRegistration(@Param("id") id: string, @Body() data: Partial<PropertyRegistrationDto>) {
        return this.propertyRegistrationService.updatePropertyRegistration(id, data);
    }

    @Post("/:id")
    async deletePropertyRegistration(@Param("id") id: string) {
        return this.propertyRegistrationService.deletePropertyRegistration(id);
    }

}
