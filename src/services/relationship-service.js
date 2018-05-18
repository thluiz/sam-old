"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const PersonRelationship_1 = require("./../entity/PersonRelationship");
const database_facility_1 = require("./../facilities/database-facility");
const result_1 = require("../helpers/result");
const errors_codes_1 = require("../helpers/errors-codes");
class RelationshipService {
    static load_person_relationship(person_id, include_indications = false) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const PR = yield database_facility_1.DatabaseFacility.getRepository(PersonRelationship_1.PersonRelationship);
                const exclude_indications = include_indications ? ""
                    : "and (person2_id = :id or (person_id != :id and relationship_type not in (10,13,14)))";
                let entities = yield PR
                    .createQueryBuilder("pr")
                    .innerJoinAndSelect("pr.relationship_type", "rt")
                    .innerJoinAndSelect("pr.parent_person", "parent_person")
                    .innerJoinAndSelect("pr.target_person", "target_person")
                    .where(`(pr.person_id = :id or pr.person2_id = :id) ${exclude_indications}`, { id: person_id })
                    .getMany();
                console.log(entities);
                return result_1.Result.Ok(entities);
            }
            catch (error) {
                return result_1.Result.Fail(errors_codes_1.ErrorCode.GenericError, error);
            }
        });
    }
}
exports.RelationshipService = RelationshipService;
//# sourceMappingURL=relationship-service.js.map