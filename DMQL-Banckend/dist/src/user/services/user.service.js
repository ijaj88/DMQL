"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var UserService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const class_transformer_1 = require("class-transformer");
const Papa = require("papaparse");
const logger_service_1 = require("../../shared/logger/logger.service");
const user_output_dto_1 = require("../dtos/user-output.dto");
const users_entity_1 = require("../entities/users.entity");
const user_repository_1 = require("../repositories/user.repository");
let UserService = UserService_1 = class UserService {
    constructor(repository, logger) {
        this.repository = repository;
        this.logger = logger;
        this.logger.setContext(UserService_1.name);
    }
    async createUser(ctx, input) {
        this.logger.log(ctx, `${this.createUser.name} was called`);
        const user = (0, class_transformer_1.plainToClass)(users_entity_1.User, input);
        user.password = await (0, bcrypt_1.hash)(input.password, 10);
        this.logger.log(ctx, `calling ${user_repository_1.UserRepository.name}.saveUser`);
        const savedUser = await this.repository.save(user);
        return (0, class_transformer_1.plainToClass)(user_output_dto_1.UserOutput, user, {
            excludeExtraneousValues: true,
        });
    }
    async findByIdInternal(ctx, id) {
        this.logger.log(ctx, `${this.findById.name} was called`);
        this.logger.log(ctx, `calling ${user_repository_1.UserRepository.name}.findOne`);
        const user = await this.repository.findOne({ where: { id } });
        return user;
    }
    async validateUsernamePassword(ctx, username, pass) {
        this.logger.log(ctx, `${this.validateUsernamePassword.name} was called`);
        this.logger.log(ctx, `calling ${user_repository_1.UserRepository.name}.findOne`);
        const user = await this.repository.findOne({ where: { username } });
        if (!user)
            throw new common_1.UnauthorizedException();
        const match = await (0, bcrypt_1.compare)(pass, user.password);
        if (!match)
            throw new common_1.UnauthorizedException();
        return (0, class_transformer_1.plainToClass)(user_output_dto_1.UserOutput, user, {
            excludeExtraneousValues: true,
        });
    }
    async parseAndUpdateUserInformation(ctx, input) {
        const parsed = Papa.parse(input, { header: true });
        for (const data of parsed.data) {
            const updateInput = (0, class_transformer_1.plainToClass)(users_entity_1.User, data);
            const user = await this.findByUsername(ctx, updateInput.username);
            if (user) {
                const updatedUser = Object.assign(Object.assign({}, user), updateInput);
                this.logger.log(ctx, `calling ${user_repository_1.UserRepository.name}.save`);
                await this.repository.save(updatedUser);
            }
        }
    }
    async getUsers(ctx, limit, offset) {
        this.logger.log(ctx, `${this.getUsers.name} was called`);
        this.logger.log(ctx, `calling ${user_repository_1.UserRepository.name}.findAndCount`);
        const [users, count] = await this.repository.findAndCount({
            where: {},
            take: limit,
            skip: offset,
        });
        const usersOutput = (0, class_transformer_1.plainToClass)(user_output_dto_1.UserOutput, users, {
            excludeExtraneousValues: true,
        });
        return { users: usersOutput, count };
    }
    async findById(ctx, id) {
        this.logger.log(ctx, `${this.findById.name} was called`);
        this.logger.log(ctx, `calling ${user_repository_1.UserRepository.name}.findOne`);
        const user = await this.repository.findOne({
            where: { id },
        });
        delete user.password;
        return user;
    }
    async findByEmail(ctx, email) {
        this.logger.log(ctx, `${this.findById.name} was called`);
        this.logger.log(ctx, `calling ${user_repository_1.UserRepository.name}.findOne`);
        const user = await this.repository.findOne({ where: { email } });
        return (0, class_transformer_1.plainToClass)(user_output_dto_1.UserOutput, user);
    }
    async getUserById(ctx, id) {
        this.logger.log(ctx, `${this.getUserById.name} was called`);
        this.logger.log(ctx, `calling ${user_repository_1.UserRepository.name}.getById`);
        const user = await this.repository.getById(id);
        return (0, class_transformer_1.plainToClass)(user_output_dto_1.UserOutput, user, {
            excludeExtraneousValues: true,
        });
    }
    async findByUsername(ctx, username) {
        this.logger.log(ctx, `${this.findByUsername.name} was called`);
        this.logger.log(ctx, `calling ${user_repository_1.UserRepository.name}.findOne`);
        const user = await this.repository.findOne({ where: { username } });
        return (0, class_transformer_1.plainToClass)(user_output_dto_1.UserOutput, user, {
            excludeExtraneousValues: true,
        });
    }
    async updateUser(ctx, userId, input) {
        this.logger.log(ctx, `${this.updateUser.name} was called`);
        this.logger.log(ctx, `calling ${user_repository_1.UserRepository.name}.getById`);
        const user = await this.repository.getById(userId);
        if (input.password) {
            input.password = await (0, bcrypt_1.hash)(input.password, 10);
        }
        const updatedUser = Object.assign(Object.assign({}, user), (0, class_transformer_1.plainToClass)(users_entity_1.User, input));
        this.logger.log(ctx, `calling ${user_repository_1.UserRepository.name}.save`);
        await this.repository.save(updatedUser);
        return (0, class_transformer_1.plainToClass)(user_output_dto_1.UserOutput, updatedUser, {
            excludeExtraneousValues: true,
        });
    }
    async updateRole(ctx, input) {
        this.logger.log(ctx, `${this.updateUser.name} was called`);
        this.logger.log(ctx, `calling ${user_repository_1.UserRepository.name}.getById`);
        const user = await this.repository.findOne({
            where: { username: input.username },
        });
        delete input.username;
        const updatedUser = Object.assign(Object.assign({}, user), (0, class_transformer_1.plainToClass)(users_entity_1.User, input));
        this.logger.log(ctx, `calling ${user_repository_1.UserRepository.name}.save`);
        await this.repository.save(updatedUser);
        return (0, class_transformer_1.plainToClass)(user_output_dto_1.UserOutput, updatedUser, {
            excludeExtraneousValues: true,
        });
    }
};
UserService = UserService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        logger_service_1.AppLogger])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map