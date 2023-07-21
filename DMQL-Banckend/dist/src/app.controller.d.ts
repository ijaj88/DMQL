import { AppService } from './app.service';
import { AppLogger } from './shared/logger/logger.service';
import { RequestContext } from './shared/request-context/request-context.dto';
export declare class AppController {
    private readonly logger;
    private readonly appService;
    constructor(logger: AppLogger, appService: AppService);
    getHello(ctx: RequestContext): string;
}
