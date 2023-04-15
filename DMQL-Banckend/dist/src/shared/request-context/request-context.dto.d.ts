import { UserAccessTokenClaims } from '../../auth/dtos/auth-token-output.dto';
export declare class RequestContext {
    requestID: string;
    url: string;
    ip: string;
    user: UserAccessTokenClaims;
}
