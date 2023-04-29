import { BaseApiResponse } from '../../shared/dtos/base-api-response.dto';
import { PaginationParamsDto } from '../../shared/dtos/pagination-params.dto';
import { AppLogger } from '../../shared/logger/logger.service';
import { RequestContext } from '../../shared/request-context/request-context.dto';
import { UserOutput } from '../dtos/user-output.dto';
import { UpdateUserInput } from '../dtos/user-update-input.dto';
import { UserService } from '../services/user.service';
import { BookingInput } from '../dtos/user-booking-input.dto';
export declare class UserController {
    private readonly userService;
    private readonly logger;
    constructor(userService: UserService, logger: AppLogger);
    getMyProfile(ctx: RequestContext): Promise<BaseApiResponse<any>>;
    getUsers(ctx: RequestContext, query: PaginationParamsDto): Promise<BaseApiResponse<any>>;
    getUser(ctx: RequestContext, id: number): Promise<BaseApiResponse<any>>;
    updateUser(ctx: RequestContext, input: UpdateUserInput): Promise<BaseApiResponse<UserOutput>>;
    createEvent(id: number, ctx: RequestContext, input: BookingInput): Promise<{
        data: {
            book: import("../entities/appointment.entity").Appointment;
            message: string;
        };
        meta: {};
    }>;
}
