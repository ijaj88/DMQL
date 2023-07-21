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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const bill_entity_1 = require("../entities/bill.entity");
let BillingRepository = class BillingRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(bill_entity_1.billingdetails, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async getById(id) {
        const user = await this.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return user;
    }
};
BillingRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], BillingRepository);
exports.BillingRepository = BillingRepository;
//# sourceMappingURL=billing.repository.js.map