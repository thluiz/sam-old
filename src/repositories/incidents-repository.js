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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const showdown = require("showdown");
const base_repository_1 = require("./base-repository");
const trylog_decorator_1 = require("../decorators/trylog-decorator");
const result_1 = require("../helpers/result");
const Incident_1 = require("../entity/Incident");
const database_manager_1 = require("../services/managers/database-manager");
const dependency_manager_1 = require("../services/managers/dependency-manager");
const converter = new showdown.Converter();
const DBM = dependency_manager_1.DependencyManager.container.resolve(database_manager_1.DatabaseManager);
class IncidentsRepository extends base_repository_1.BaseRepository {
    constructor() {
        super();
        this.summaryCache = [];
        this.type = Incident_1.Incident;
    }
    getAgenda(branchId, date) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.DBM.ExecuteJsonSP("GetAgenda2", { branch_id: branchId }, { date });
        });
    }
    getAvailableOwnerships(branchId, date, type) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.DBM.ExecuteJsonSP("GetAvailableOwnerships", { branch_id: branchId }, { date }, { type });
            return result;
        });
    }
    getCurrentActivities(branchId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.DBM.ExecuteJsonSP("GetCurrentActivities", { branch_id: branchId });
            return result;
        });
    }
    getPeopleSummary(branchId, weekModifier, date) {
        return __awaiter(this, void 0, void 0, function* () {
            this.summaryCache = this.summaryCache
                .filter((c) => c.lastcall < ((new Date()).getTime() - 10000)); // clear every 10 seconds
            const cached = this.summaryCache = this.summaryCache
                .filter((c) => c.branch === branchId
                && c.week_modifier === weekModifier
                && c.date === date);
            if (cached.length > 0) {
                return cached[0].result;
            }
            const result = yield this.DBM.ExecuteJsonSP("GetPeopleSummary", { branch: branchId }, { week_modifier: weekModifier }, { date });
            this.summaryCache.push({
                branch: branchId,
                week_modifier: weekModifier,
                date,
                lastcall: (new Date()).getTime(),
                result
            });
            return result;
        });
    }
    getSummary(branchId, monthModifier, weekModifier, date) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.DBM.ExecuteJsonSP("GetPeopleSummary", { branch: branchId }, { month_modifier: monthModifier }, { week_modifier: weekModifier }, { date });
        });
    }
    getDailyMonitor(branchId, display, displayModifier) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.DBM.ExecuteJsonSP("GetDailyMonitor2", { branch: branchId }, { display_modifier: displayModifier }, { display });
        });
    }
    getPersonIncidentsHistory(personId, startDate, endDate, activityType) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.DBM.ExecuteJsonSP("GetPersonIncidentHistory2", { person_id: personId }, { start_date: startDate }, { end_date: endDate }, { activity_type: activityType });
        });
    }
    getIncidentDetails(incidentId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.DBM.ExecuteJsonSP("GetIncidentDetails", { id: incidentId });
        });
    }
    getOwnershipData(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const ownershipData = yield this.DBM.ExecuteJsonSP("getOwnershipData", {
                ownership_id: id
            });
            const data = ownershipData.data[0];
            if (!data.incidents) {
                data.incidents = [];
            }
            for (const incident of data.incidents) {
                if (incident.description) {
                    const d = incident.description.replace(/\r?\n/g, "<br />");
                    incident.description = converter.makeHtml(d);
                }
                if (incident.close_text) {
                    const d = incident.close_text.replace(/\r?\n/g, "<br />");
                    incident.close_text = converter.makeHtml(d);
                }
            }
            return result_1.SuccessResult.GeneralOk(data);
        });
    }
}
__decorate([
    trylog_decorator_1.trylog2(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], IncidentsRepository.prototype, "getAgenda", null);
__decorate([
    trylog_decorator_1.trylog2(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], IncidentsRepository.prototype, "getAvailableOwnerships", null);
__decorate([
    trylog_decorator_1.trylog2(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IncidentsRepository.prototype, "getCurrentActivities", null);
__decorate([
    trylog_decorator_1.trylog2(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], IncidentsRepository.prototype, "getPeopleSummary", null);
__decorate([
    trylog_decorator_1.trylog2(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], IncidentsRepository.prototype, "getSummary", null);
__decorate([
    trylog_decorator_1.trylog2(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], IncidentsRepository.prototype, "getDailyMonitor", null);
__decorate([
    trylog_decorator_1.trylog2(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], IncidentsRepository.prototype, "getPersonIncidentsHistory", null);
__decorate([
    trylog_decorator_1.trylog2(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IncidentsRepository.prototype, "getIncidentDetails", null);
__decorate([
    trylog_decorator_1.trylog2(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IncidentsRepository.prototype, "getOwnershipData", null);
exports.IncidentsRepository = IncidentsRepository;
//# sourceMappingURL=incidents-repository.js.map