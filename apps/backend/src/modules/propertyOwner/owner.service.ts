import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PropertyOwnerDto } from './property-owner.dto';

@Injectable()
export class OwnerService {
    constructor(private prisma: PrismaService) { }

    async getAllOwners(page: number, limit: number) {
    const skip = (page - 1) * limit;

    const data = await this.prisma.propertyOwner.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' }
    });

    const total = await this.prisma.propertyOwner.count();

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

    async createOwner(data: PropertyOwnerDto){
        const newOwner = await this.prisma.propertyOwner.create({data})
        return newOwner;
    }

    async getOwnerById(id: string) {
        const owner = await this.prisma.propertyOwner.findUnique({
            where: { id }
        });
        return owner;
    }

    async updateOwner(id: string, data: Partial<{ fullName: string; email: string; phoneNumber: string; address: string; }>) {
        const updatedOwner = await this.prisma.propertyOwner.update({
            where: { id },
            data
        });
        return updatedOwner;
    }

    async deleteOwner(id: string) {
        const deletedOwner = await this.prisma.propertyOwner.delete({
            where: { id }
        });
        return deletedOwner;
    }
}
