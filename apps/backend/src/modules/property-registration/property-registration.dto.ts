import { IsDate, IsString } from "class-validator";
import { RegistrationStatus } from "src/generated/prisma/enums";

export class PropertyRegistrationDto {
    @IsString()
    ownerId: string;
    @IsString()
    propertyAddress: string;
    @IsDate()
    registrationDate: Date;
    @IsString()
    registrationNumber: string;
    @IsString()
    propertyType: string;
    @IsDate()
    submittedAt: Date;
    @IsDate()
    reviewedAt?: Date;
    @IsString()

    status: RegistrationStatus;
    @IsString()
    rejectionReason?: string;
    @IsString()
    certificateNumber?: string;
    @IsDate()
    certificateIssuedAt?: Date;
    userId: string;
    propertyId: string;
}