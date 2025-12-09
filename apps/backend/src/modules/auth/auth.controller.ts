
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto, registerDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('register')
  register(@Body() data: registerDto) {
    return this.auth.register(data);
  }

  @Post('login')
  login(@Body() data: loginDto) {
    return this.auth.login(data.email,data.password);
  }
}
