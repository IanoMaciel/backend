import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { DonorsModule } from '../donors/donors.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donor } from '../donors/entities/donor.entity';
import { JwtStrategy } from './jwt-strategy';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    DonorsModule,
    PassportModule,
    JwtModule.register({
      secret: "efefrrgrvregergregrgrrg",
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forFeature([Donor]),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
