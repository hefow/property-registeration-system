import { Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { PropertyOwnerDto } from './property-owner.dto';

@Controller('property-owner')
export class PropertyOwnerController {
    // Define your endpoints and methods here
    constructor(private propertyOwnerService: OwnerService) {}

    // @Get()
    // async getAllOwners() {
    //     return this.propertyOwnerService.getAllOwners();
    // }
    @Get()
    async getAllOwners(
        @Query('page') page: string,
        @Query('limit') limit: string
        ) {
        return this.propertyOwnerService.getAllOwners(
            Number(page) || 1,
            Number(limit) || 10
        );
    }
    @Post()
    async createOwner(data: PropertyOwnerDto) {
        const newOwner = await this.propertyOwnerService.createOwner(data);
        return newOwner;
    }

    @Get("/:id")
    async getOwnerById(@Param("id") id: string){
        const owner = await this.propertyOwnerService.getOwnerById(id);
        return owner;
    }

    @Patch("/:id")
    async updateOwner(@Param("id") id: string, data: Partial<PropertyOwnerDto>){
        const updatedOwner = await this.propertyOwnerService.updateOwner(id, data);
        return updatedOwner;
    }

    @Post("/:id")
    async deleteOwner(@Param("id") id: string){
        const deletedOwner = await this.propertyOwnerService.deleteOwner(id);
        return deletedOwner;
    }
}
