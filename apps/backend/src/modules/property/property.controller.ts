import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PropertyService } from './property.service';
import { get } from 'http';
import { createPropertyDto } from './create.property.dto';

@Controller('property')
export class PropertyController {
    constructor(private propertyService: PropertyService){}

    @Get()
    async getAllProperties(){
        return this.propertyService.getAllProperties();
    }

    @Post()
    async createProperty(@Body() data: createPropertyDto){
        return this.propertyService.createProperty(data);
    }

    @Get("/:id")
    async getPropertyById(@Param("id") id: string){
        return this.propertyService.getPropertyById(id);
    }

    @Put("/:id")
    async updateProperty(@Param("id") id: string,  @Body() data: Partial<createPropertyDto>){
        return this.propertyService.updateProperty(id, data);
    }

    @Delete("/:id")
    async deleteProperty(@Param("id") id: string){
        return this.propertyService.deleteProperty(id);
    }

}
