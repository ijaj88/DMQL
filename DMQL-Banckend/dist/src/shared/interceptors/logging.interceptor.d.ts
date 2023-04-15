import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppLogger } from '../logger/logger.service';
export declare class LoggingInterceptor implements NestInterceptor {
    private appLogger;
    constructor(appLogger: AppLogger);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
