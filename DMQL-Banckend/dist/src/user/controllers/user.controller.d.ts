/// <reference types="multer" />
import { BaseApiResponse } from '../../shared/dtos/base-api-response.dto';
import { PaginationParamsDto } from '../../shared/dtos/pagination-params.dto';
import { AppLogger } from '../../shared/logger/logger.service';
import { RequestContext } from '../../shared/request-context/request-context.dto';
import { CSVUploadDto } from '../dtos/csv-upload.dto';
import { UserOutput } from '../dtos/user-output.dto';
import { UpdateRoleDto, UpdateUserInput } from '../dtos/user-update-input.dto';
import { User } from '../entities/users.entity';
import { UserService } from '../services/user.service';
export declare class UserController {
    private readonly userService;
    private readonly logger;
    constructor(userService: UserService, logger: AppLogger);
    getMyProfile(ctx: RequestContext): Promise<BaseApiResponse<User>>;
    getUsers(ctx: RequestContext, query: PaginationParamsDto): Promise<BaseApiResponse<UserOutput[]>>;
    getUser(ctx: RequestContext, id: number): Promise<BaseApiResponse<UserOutput>>;
    uploadFile(input: CSVUploadDto, ctx: RequestContext, file: Express.Multer.File): Promise<void>;
    updateUser(ctx: RequestContext, input: UpdateUserInput): Promise<BaseApiResponse<UserOutput>>;
    updateRole(ctx: RequestContext, input: UpdateRoleDto): Promise<BaseApiResponse<UserOutput>>;
    createEvent(input: number, ctx: RequestContext): Promise<{
        data: void;
        meta: {};
    }>;
}
