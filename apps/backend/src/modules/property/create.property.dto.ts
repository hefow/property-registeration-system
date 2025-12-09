import { IsNumber, IsString, isString } from "class-validator";
import { PropertyType } from "src/generated/prisma/enums";

export class createPropertyDto{
    @IsString()
    address: string;
    @IsString()
    city: string;
    @IsString()
    location: string;
    @IsNumber()
    area: number;
    @IsString()
    areaUnit: string;
    propertyType: PropertyType;
    @IsNumber()
    longitude: number;
    @IsNumber()
    latitude: number
    @IsString()
    district: string;
    @IsString()
    boundaries: string;
    @IsString()
    plotNumber: string;
    @IsString()
    landUse: string;
    @IsString()
    description?: string;
}