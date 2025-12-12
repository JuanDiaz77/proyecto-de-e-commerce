import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';

// Variables intermedias tipadas para evitar ESLint
const jwtSecret = String(process.env.JWT_SECRET || 'default_secret');

// Forzamos el tipo a un StringValue compatible con signOptions
type JwtExpires = '1s' | '1m' | '30m' | '1h' | '2h' | '1d' | '7d';
const jwtExpires: JwtExpires = (process.env.JWT_EXPIRES || '1d') as JwtExpires;

const passportModule = PassportModule.register({ defaultStrategy: 'jwt' });

@Module({
  imports: [
    UsersModule,
    passportModule, // <-- uso seguro
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: jwtExpires }, // ya es compatible
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
