import { Request } from 'express';
import { RequestContext } from '../request-context.dto';
export declare function createRequestContext(request: Request): RequestContext;
export declare function buildQuery(query: string, params: {
    [key: string]: any;
}): string;
