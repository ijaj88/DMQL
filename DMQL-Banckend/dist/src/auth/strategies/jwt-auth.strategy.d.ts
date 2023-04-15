import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { UserAccessTokenClaims } from '../dtos/auth-token-output.dto';
declare const JwtAuthStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtAuthStrategy extends JwtAuthStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate(payload: any): Promise<UserAccessTokenClaims>;
}
export {};
