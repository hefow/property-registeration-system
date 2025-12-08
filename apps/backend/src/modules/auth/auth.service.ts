import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { UserRole } from 'src/generated/prisma/enums';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  // ✅ Register User
  async register(data: {
    email: string;
    password: string;
    fullName: string;
    phoneNumber?: string;
    role?: UserRole ;
    department?: string;
  }) {
    // Check existing user
    const exists = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (exists) {
      throw new BadRequestException('Email already in use');
    }

    // Hash password
    const hashed = await bcrypt.hash(data.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        password: hashed,
        fullName: data.fullName,
        phoneNumber: data.phoneNumber || null,
        role: data.role || 'PROPERTY_OWNER',
        department: data.department || null,
      },
    });

    return {
      message: 'User registered successfully',
      userId: user.id,
    };
  }

  // ✅ Login User
  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const token = await this.jwt.signAsync(payload);

    return {
      access_token: token,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
      },
    };
  }
}
