import { BaseApiResponse } from '../../shared/dtos/base-api-response.dto';
import { AppLogger } from '../../shared/logger/logger.service';
import { RequestContext } from '../../shared/request-context/request-context.dto';
import { LoginInput } from '../dtos/auth-login-input.dto';
import { RefreshTokenInput } from '../dtos/auth-refresh-token-input.dto';
import { RegisterInput } from '../dtos/auth-register-input.dto';
import { RegisterOutput } from '../dtos/auth-register-output.dto';
import { AuthTokenOutput } from '../dtos/auth-token-output.dto';
import { AuthService } from '../services/auth.service';
export declare class AuthController {
    private readonly authService;
    private readonly logger;
    constructor(authService: AuthService, logger: AppLogger);
    login(ctx: RequestContext, credential: LoginInput): BaseApiResponse<AuthTokenOutput>;
    registerLocal(ctx: RequestContext, input: RegisterInput): Promise<BaseApiResponse<RegisterOutput>>;
    refreshToken(ctx: RequestContext, credential: RefreshTokenInput): Promise<BaseApiResponse<AuthTokenOutput>>;
}
