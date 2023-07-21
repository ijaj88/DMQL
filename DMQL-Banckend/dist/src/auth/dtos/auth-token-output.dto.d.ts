import { ROLE } from '../constants/role.constant';
export declare class AuthTokenOutput {
    accessToken: string;
    refreshToken: string;
}
export declare class UserAccessTokenClaims {
    id: number;
    username: string;
    roles: ROLE[];
}
export declare class UserRefreshTokenClaims {
    id: number;
}
