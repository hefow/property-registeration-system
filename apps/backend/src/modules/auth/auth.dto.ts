import { IsString } from "class-validator";
import { UserRole } from "src/generated/prisma/enums";

export class registerDto {
    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsString()
    fullName: string;

    @IsString()
    phoneNumber: string;
    role: UserRole
}

export class loginDto {
    @IsString()
    email: string;

    @IsString()
    password: string;
}