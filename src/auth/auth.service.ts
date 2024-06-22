
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DonorsService } from '../donors/donors.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: DonorsService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    console.log('Generating token for:', user.email); 
    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
}
}
