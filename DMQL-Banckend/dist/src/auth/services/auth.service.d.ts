import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/users.entity';
import { AppLogger } from '../../shared/logger/logger.service';
import { RequestContext } from '../../shared/request-context/request-context.dto';
import { UserService } from '../../user/services/user.service';
import { RegisterInput } from '../dtos/auth-register-input.dto';
import { RegisterOutput } from '../dtos/auth-register-output.dto';
import { DoctorService } from 'src/user/services/doctor.service';
import { patientRegister, DoctorRegister, AdminRegister } from '../dtos/auth-register-input.dto';
import { AuthTokenOutput, UserAccessTokenClaims } from '../dtos/auth-token-output.dto';
export declare class AuthService {
    private userService;
    private DoctorService;
    private jwtService;
    private configService;
    private readonly logger;
    constructor(userService: UserService, DoctorService: DoctorService, jwtService: JwtService, configService: ConfigService, logger: AppLogger);
    validateUser(ctx: RequestContext, email: string, pass: string): Promise<UserAccessTokenClaims>;
    login(ctx: RequestContext): AuthTokenOutput;
    register(ctx: RequestContext, input: RegisterInput | patientRegister | DoctorRegister | AdminRegister): Promise<RegisterOutput>;
    refreshToken(ctx: RequestContext): Promise<AuthTokenOutput>;
    getAuthToken(ctx: RequestContext, user: UserAccessTokenClaims | User): AuthTokenOutput;
}
