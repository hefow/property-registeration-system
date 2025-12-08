import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createPropertyDto } from './create.property.dto';

@Injectable()
export class PropertyService {
    constructor(private prisma: PrismaService){}

    async getAllProperties(){
        const properties = await this.prisma.property.findMany()
        return properties;
    }

    async createProperty(data: createPropertyDto){
        const property = await this.prisma.property.create({data})
        return property;
    }

    async getPropertyById(id: string){
        const property = await this.prisma.property.findUnique({
            where: {id}
        })
        return property;
    }

    async updateProperty(id: string, data: Partial<createPropertyDto>){
        const property = await this.prisma.property.update({
            where: {id},
            data
        })
        return property;
    }

    async deleteProperty(id: string){
        const property = await this.prisma.property.delete({
            where: {id}
        })
        return property;
    }
}
