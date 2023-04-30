import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    FileTypeValidator,
    Get,
    HttpStatus,
    MaxFileSizeValidator,
    Param,
    ParseFilePipe,
    Patch,
    Post,
    Query,
    UploadedFile,
    UseGuards,
    UseInterceptors,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import {
    ApiBearerAuth,
    ApiBody,
    ApiConsumes,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';
  
  import { ROLE } from '../../auth/constants/role.constant';
  import { Roles } from '../../auth/decorators/role.decorator';
  import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
  import { RolesGuard } from '../../auth/guards/roles.guard';
  import {
    BaseApiErrorResponse,
    BaseApiResponse,
    SwaggerBaseApiResponse,
  } from '../../shared/dtos/base-api-response.dto';
  import { PaginationParamsDto } from '../../shared/dtos/pagination-params.dto';
  import { AppLogger } from '../../shared/logger/logger.service';
  import { ReqContext } from '../../shared/request-context/req-context.decorator';
  import { RequestContext } from '../../shared/request-context/request-context.dto';
  import { CSVUploadDto } from '../dtos/csv-upload.dto';
  import { UserOutput } from '../dtos/user-output.dto';
  import { UpdateRoleDto, UpdateUserInput } from '../dtos/user-update-input.dto';
  import { User } from '../entities/users.entity';
  import { UserService } from '../services/user.service';
  import { DoctorService } from '../services/doctor.service';
  import { Doctor } from '../entities/doctor.entity';
  import { DoctOutput } from '../dtos/doctor-output.dto';
  import {BookingService} from '../dtos/patientservice.dto'
  
  @ApiTags('users')
  @Controller('users/doctor')
  export class DoctorController {
    constructor(
      private readonly userService: UserService,
      private readonly DoctorService:DoctorService,
      private readonly logger: AppLogger,
    ) {
      this.logger.setContext(DoctorController.name);
    }
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('me')
    @ApiOperation({
      summary: 'Get user me API',
    })
    @ApiResponse({
      status: HttpStatus.OK,
      type: SwaggerBaseApiResponse(UserOutput),
    })
    @ApiResponse({
      status: HttpStatus.UNAUTHORIZED,
      type: BaseApiErrorResponse,
    })
    async getMyProfile(
      @ReqContext() ctx: RequestContext,
    ): Promise<BaseApiResponse<DoctOutput>> {
      this.logger.log(ctx, `${this.getMyProfile.name} was called`);
  
      const user = await this.DoctorService.findById(ctx, ctx.user.id);
      return { data: user, meta: {} };
    }
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('MedList')
    @ApiOperation({
      summary: 'Get users as a list API',
    })
    @ApiResponse({
      status: HttpStatus.OK,
      type: SwaggerBaseApiResponse([UserOutput]),
    })
    @ApiResponse({
      status: HttpStatus.UNAUTHORIZED,
      type: BaseApiErrorResponse,
    })
    //@UseGuards(JwtAuthGuard, RolesGuard)
    //@Roles(ROLE.ADMIN, ROLE.USER)
    async getUsers1(
      @ReqContext() ctx: RequestContext,
      @Query() query: PaginationParamsDto,
    ): Promise<BaseApiResponse<any[]>> {
  
      const a = await this.DoctorService.MedicineList(
        ctx,
        query.limit,
        query.offset,
      );
  
      return a;
    }
  
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('LabList')
    @ApiOperation({
      summary: 'Get users as a list API',
    })
    @ApiResponse({
      status: HttpStatus.OK,
      type: SwaggerBaseApiResponse([UserOutput]),
    })
    @ApiResponse({
      status: HttpStatus.UNAUTHORIZED,
      type: BaseApiErrorResponse,
    })
    //@UseGuards(JwtAuthGuard, RolesGuard)
    //@Roles(ROLE.ADMIN, ROLE.USER)
    async getUsers2(
      @ReqContext() ctx: RequestContext,
      @Query() query: PaginationParamsDto,
    ): Promise<BaseApiResponse<any[]>> {
  
      const a = await this.DoctorService.LabList(
        ctx,
        query.limit,
        query.offset,
      );
  
      return a;
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    @ApiOperation({
      summary: 'Get users as a list API',
    })
    @ApiResponse({
      status: HttpStatus.OK,
      type: SwaggerBaseApiResponse([UserOutput]),
    })
    @ApiResponse({
      status: HttpStatus.UNAUTHORIZED,
      type: BaseApiErrorResponse,
    })
    //@UseGuards(JwtAuthGuard, RolesGuard)
    //@Roles(ROLE.ADMIN, ROLE.USER)
    async getUsers(
      @ReqContext() ctx: RequestContext,
      @Query() query: PaginationParamsDto,
    ): Promise<BaseApiResponse<DoctOutput[]>> {
      this.logger.log(ctx, `${this.getUsers.name} was called`);
  
      const { users, count } = await this.DoctorService.getUsers(
        ctx,
        query.limit,
        query.offset,
      );
      console.log(users)
  
      return { data: users, meta: { count } };
    }
  
    // TODO: ADD RoleGuard
    // NOTE : This can be made a admin only endpoint. For normal users they can use GET /me
    @UseInterceptors(ClassSerializerInterceptor)
    @Get(':id')
    @ApiOperation({
      summary: 'Get user by id API',
    })
    @ApiResponse({
      status: HttpStatus.OK,
      type: SwaggerBaseApiResponse(UserOutput),
    })
    @ApiResponse({
      status: HttpStatus.UNAUTHORIZED,
      type: BaseApiErrorResponse,
    })
    @ApiResponse({
      status: HttpStatus.NOT_FOUND,
      type: BaseApiErrorResponse,
    })
    async getUser(
      @ReqContext() ctx: RequestContext,
      @Param('id') id: number,
    ): Promise<BaseApiResponse<DoctOutput>> {
      this.logger.log(ctx, `${this.getUser.name} was called`);
  
      const user = await this.DoctorService.findById(ctx, id);
      return { data: user, meta: {} };
    }
  

  
    // TODO: ADD RoleGuard
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Patch()
    @ApiOperation({
      summary: 'Update user API',
    })
    @ApiResponse({
      status: HttpStatus.OK,
      type: SwaggerBaseApiResponse(UserOutput),
    })
    @ApiResponse({
      status: HttpStatus.NOT_FOUND,
      type: BaseApiErrorResponse,
    })
    @UseInterceptors(ClassSerializerInterceptor)
    async updateUser(
      @ReqContext() ctx: RequestContext,
      @Body() input: UpdateUserInput,
    ): Promise<BaseApiResponse<UserOutput>> {
      this.logger.log(ctx, `${this.updateUser.name} was called`);
  
      const user = await this.userService.updateUser(ctx, ctx.user.id, input);
      return { data: user, meta: {} };
    }
  /*
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Patch('role')
    @ApiOperation({
      summary: 'Update user API',
    })
    @ApiResponse({
      status: HttpStatus.OK,
      type: SwaggerBaseApiResponse(UserOutput),
    })
    @ApiResponse({
      status: HttpStatus.NOT_FOUND,
      type: BaseApiErrorResponse,
    })
    @UseInterceptors(ClassSerializerInterceptor)
    async updateRole(
      @ReqContext() ctx: RequestContext,
      @Body() input: UpdateRoleDto,
    ): Promise<BaseApiResponse<UserOutput>> {
      this.logger.log(ctx, `${this.updateUser.name} was called`);
  
      const user = await this.userService.updateRole(ctx, input);
      return { data: user, meta: {} };
    }
*/
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('Availabilty/:doctorId')
    @ApiOperation({
      summary: 'Get doctor slots by id API',
    })
    @ApiResponse({
      status: HttpStatus.OK,
      type: SwaggerBaseApiResponse(UserOutput),
    })
    @ApiResponse({
      status: HttpStatus.UNAUTHORIZED,
      type: BaseApiErrorResponse,
    })
    @ApiResponse({
      status: HttpStatus.NOT_FOUND,
      type: BaseApiErrorResponse,
    })
    async geDoctorSlots(
      @ReqContext() ctx: RequestContext,
      @Param('doctorId') id: number,
    ): Promise<BaseApiResponse<any>> {
      this.logger.log(ctx, `${this.getUser.name} was called`);
  
      const user = await this.DoctorService.GetSlots(ctx, id);
      return { data: user, meta: {} };
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('QueryMaster/:id')
    @ApiOperation({
      summary: 'Get doctor slots by id API',
    })
    @ApiResponse({
      status: HttpStatus.OK,
      type: SwaggerBaseApiResponse(UserOutput),
    })
    @ApiResponse({
      status: HttpStatus.UNAUTHORIZED,
      type: BaseApiErrorResponse,
    })
    @ApiResponse({
      status: HttpStatus.NOT_FOUND,
      type: BaseApiErrorResponse,
    })
    async MasterQueries(
      @ReqContext() ctx: RequestContext,
      @Param('id') id: number,
    ): Promise<BaseApiResponse<any>> {
      this.logger.log(ctx, `${this.getUser.name} was called`);
  
      const user = await this.DoctorService.GeneralQuery(id);
      return { data: user, meta: {} };
    }



    @UseInterceptors(ClassSerializerInterceptor)
    @Post('/PatientMedice/:id')
    @ApiOperation({
      summary: 'Get user by id API',
    })
    @ApiResponse({
      status: HttpStatus.OK,
      type: SwaggerBaseApiResponse(UserOutput),
    })
    @ApiResponse({
      status: HttpStatus.UNAUTHORIZED,
      type: BaseApiErrorResponse,
    })
    @ApiResponse({
      status: HttpStatus.NOT_FOUND,
      type: BaseApiErrorResponse,
    })
    async PatinetMedice(
      @ReqContext() ctx: RequestContext,
      @Param('id') id: number,
      @Body() input: BookingService

    ): Promise<BaseApiResponse<any>> {
      this.logger.log(ctx, `${this.getUser.name} was called`);
  
      const user = await this.DoctorService.PatientMedserve(ctx, id,input);
      return { data: user, meta: {} };
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Post('/PatientLab/:id')
    @ApiOperation({
      summary: 'Get user by id API',
    })
    @ApiResponse({
      status: HttpStatus.OK,
      type: SwaggerBaseApiResponse(UserOutput),
    })
    @ApiResponse({
      status: HttpStatus.UNAUTHORIZED,
      type: BaseApiErrorResponse,
    })
    @ApiResponse({
      status: HttpStatus.NOT_FOUND,
      type: BaseApiErrorResponse,
    })
    async PatinetLab(
      @ReqContext() ctx: RequestContext,
      @Param('id') id: number,
      @Body() input: BookingService

    ): Promise<BaseApiResponse<any>> {
      this.logger.log(ctx, `${this.getUser.name} was called`);
  
      const user = await this.DoctorService.PatientLabserve(ctx, id,input);
      return { data: user, meta: {} };
    }

  



  }
  