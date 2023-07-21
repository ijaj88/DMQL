export declare class BaseApiResponse<T> {
    data: T;
    meta: any;
}
export declare function SwaggerBaseApiResponse<T>(type: T): typeof BaseApiResponse;
export declare class BaseApiErrorObject {
    statusCode: number;
    message: string;
    localizedMessage: string;
    errorName: string;
    details: unknown;
    path: string;
    requestId: string;
    timestamp: string;
}
export declare class BaseApiErrorResponse {
    error: BaseApiErrorObject;
}
