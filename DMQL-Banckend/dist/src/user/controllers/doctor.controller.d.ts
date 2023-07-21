import { BaseApiResponse } from '../../shared/dtos/base-api-response.dto';
import { PaginationParamsDto } from '../../shared/dtos/pagination-params.dto';
import { AppLogger } from '../../shared/logger/logger.service';
import { RequestContext } from '../../shared/request-context/request-context.dto';
import { UserOutput } from '../dtos/user-output.dto';
import { UpdateUserInput } from '../dtos/user-update-input.dto';
import { UserService } from '../services/user.service';
import { DoctorService } from '../services/doctor.service';
import { DoctOutput } from '../dtos/doctor-output.dto';
import { BookingService } from '../dtos/patientservice.dto';
export declare class DoctorController {
    private readonly userService;
    private readonly DoctorService;
    private readonly logger;
    constructor(userService: UserService, DoctorService: DoctorService, logger: AppLogger);
    getMyProfile(ctx: RequestContext): Promise<BaseApiResponse<DoctOutput>>;
    getUsers1(ctx: RequestContext, query: PaginationParamsDto): Promise<BaseApiResponse<any[]>>;
    getUsers2(ctx: RequestContext, query: PaginationParamsDto): Promise<BaseApiResponse<any[]>>;
    getUsers(ctx: RequestContext, query: PaginationParamsDto): Promise<BaseApiResponse<DoctOutput[]>>;
    getUser(ctx: RequestContext, id: number): Promise<BaseApiResponse<DoctOutput>>;
    updateUser(ctx: RequestContext, input: UpdateUserInput): Promise<BaseApiResponse<UserOutput>>;
    geDoctorSlots(ctx: RequestContext, id: number): Promise<BaseApiResponse<any>>;
    MasterQueries(ctx: RequestContext, id: number): Promise<BaseApiResponse<any>>;
    PatinetMedice(ctx: RequestContext, id: number, input: BookingService): Promise<BaseApiResponse<any>>;
    PatinetLab(ctx: RequestContext, id: number, input: BookingService): Promise<BaseApiResponse<any>>;
    Billing(ctx: RequestContext, id: number, input: BookingService): Promise<BaseApiResponse<any>>;
}
