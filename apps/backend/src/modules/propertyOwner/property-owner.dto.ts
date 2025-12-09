import { IsEmail, IsNumber, IsString } from "class-validator";

export class PropertyOwnerDto {
    @IsString()
    fullName: string;
    @IsEmail()
    email: string;
    @IsNumber()
    phoneNumber: string;
    @IsString()
    address: string;
    @IsString()
    nationalId: string;
    @IsNumber()
    ownershipPercentage: number;
    @IsString()
    propertyRegistrationId: string;
}