import { AppLogger } from './shared/logger/logger.service';
import { RequestContext } from './shared/request-context/request-context.dto';
export declare class AppService {
    private readonly logger;
    constructor(logger: AppLogger);
    getHello(ctx: RequestContext): string;
}
