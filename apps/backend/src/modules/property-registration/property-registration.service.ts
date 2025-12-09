import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PropertyRegistrationDto } from './property-registration.dto';

@Injectable()
export class PropertyRegistrationService {
    constructor(private prisma: PrismaService) { }

    // async getAllPropertyRegistrations() {
    //     const registrations = await this.prisma.propertyRegistration.findMany();
    //     return registrations;
    // }
    
    async getAllPropertyRegistrations(page: number, limit: number) {
    const skip = (page - 1) * limit;

    const data = await this.prisma.propertyRegistration.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
    });

    const total = await this.prisma.propertyRegistration.count();

    return {
        data,
        meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        },
    };
    }


    async createPropertyRegistration(data: PropertyRegistrationDto) {
        const newRegistration = await this.prisma.propertyRegistration.create({data})
        return newRegistration;
    }

    async getPropertyRegistrationById(id: string) {
        const registration = await this.prisma.propertyRegistration.findUnique({
            where: { id }
        })
        return registration;
    }

    async updatePropertyRegistration(id: string, data: Partial<PropertyRegistrationDto>) {
        const updatedRegistration = await this.prisma.propertyRegistration.update({
            where: { id },
            data
        })
        return updatedRegistration;
    }

    async deletePropertyRegistration(id: string) {
        const deletedRegistration = await this.prisma.propertyRegistration.delete({
            where: { id }
        })
        return deletedRegistration;
    }
}
