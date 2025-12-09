import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createPropertyDto } from './create.property.dto';

@Injectable()
export class PropertyService {
    constructor(private prisma: PrismaService){}

    async getAllProperties(page: number, limit: number) {
    const skip = (page - 1) * limit;

    const [data, total] = await this.prisma.$transaction([
        this.prisma.property.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' }
        }),
        this.prisma.property.count()
    ]);

    return {
        data,
        meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        }
    };
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
