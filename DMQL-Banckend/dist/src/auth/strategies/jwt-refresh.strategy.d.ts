import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { UserRefreshTokenClaims } from '../dtos/auth-token-output.dto';
declare const JwtRefreshStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtRefreshStrategy extends JwtRefreshStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate(payload: any): Promise<UserRefreshTokenClaims>;
}
export {};
