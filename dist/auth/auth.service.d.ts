import { JwtService } from '@nestjs/jwt';
import { DonorsService } from '../donors/donors.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: DonorsService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
