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
const sql = require('mssql');
class PersonService {
    constructor(sql_pool) {
        this.sql_pool = sql_pool;
    }
    save_address(address) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield new sql.Request(this.sql_pool)
                .input('person_id', sql.Int, address.person_id)
                .input('country_id', sql.Int, address.country_id)
                .input('postal_code', sql.VarChar(30), address.postal_code)
                .input('street', sql.VarChar(200), address.street)
                .input('district', sql.VarChar(100), address.district)
                .input('city', sql.VarChar(100), address.city)
                .input('state', sql.VarChar(100), address.state)
                .input('number', sql.VarChar(30), address.number)
                .input('complement', sql.VarChar(50), address.complement)
                .execute(`SaveAddress`);
            return result;
        });
    }
    archive_address(person_address) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield new sql.Request(this.sql_pool)
                .input('address_id', sql.Int, person_address.address_id)
                .execute(`ArchiveAddress`);
            return result;
        });
    }
    add_role(person_id, role_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield new sql.Request(this.sql_pool)
                .input('person_id', sql.Int, person_id)
                .input('role_id', sql.Int, role_id)
                .execute(`AddPersonRole`);
            return result;
        });
    }
    remove_role(person_id, role_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield new sql.Request(this.sql_pool)
                .input('person_id', sql.Int, person_id)
                .input('role_id', sql.Int, role_id)
                .execute(`RemovePersonRole`);
            return result;
        });
    }
    change_kf_name(person_id, kf_name, ideograms) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield new sql.Request(this.sql_pool)
                .input('person_id', sql.Int, person_id)
                .input('alias', sql.VarChar(150), kf_name)
                .input('kf_name', sql.Bit, 1)
                .input('ideograms', sql.NVarChar(100), ideograms)
                .execute(`AddAlias`);
            return result;
        });
    }
    update_person_data(person) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield new sql.Request(this.sql_pool)
                .input('id', sql.Int, person.id)
                .input('name', sql.VarChar(200), person.name)
                .input('birth_date', sql.VarChar(10), person.birth_date)
                .input('admission_date', sql.VarChar(10), person.admission_date)
                .input('enrollment_date', sql.VarChar(10), person.enrollment_date)
                .input('baaisi_date', sql.VarChar(10), person.baaisi_date)
                .input('passport_expiration_date', sql.VarChar(10), person.passport_expiration_date)
                .input('kf_name', sql.VarChar(200), person.kf_name)
                .input('identification', sql.VarChar(50), person.identification)
                .input('identification2', sql.VarChar(50), person.identification2)
                .input('passport', sql.VarChar(50), person.passport)
                .input('occupation', sql.VarChar(100), person.occupation)
                .input('kf_name_ideograms', sql.NVarChar(200), person.kf_name_ideograms)
                .input('family_id', sql.Int, person.family_id > 0 ? person.family_id : null)
                .input('destiny_family_id', sql.Int, person.destiny_family_id > 0 ? person.destiny_family_id : null)
                .input('branch_id', sql.Int, person.branch_id > 0 ? person.branch_id : null)
                .input('domain_id', sql.Int, person.domain_id > 0 ? person.domain_id : null)
                .input('program_id', sql.Int, person.program_id > 0 ? person.program_id : null)
                .execute(`UpdatePersonData`);
        });
    }
    register_new_person(person, user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield new sql.Request(this.sql_pool)
                .input('role_id', sql.Int, person.role_id > 0 ? person.role_id : null)
                .input('name', sql.VarChar(200), person.name)
                .input('branch_id', sql.Int, person.branch_id > 0 ? person.branch_id : null)
                .input('birth_date', sql.VarChar(10), person.birth_date)
                .input('identification', sql.VarChar(50), person.identification)
                .input('identification2', sql.VarChar(50), person.identification2)
                .input('occupation', sql.VarChar(100), person.occupation)
                .input('next_incident_type', sql.Int, person.next_incident_type > 0 ? person.next_incident_type : null)
                .input('next_incident_date', sql.VarChar(10), person.next_incident_date && person.next_incident_date.length > 10 ? person.next_incident_date : null)
                .input('next_incident_description', sql.NVarChar(sql.MAX), person.next_incident_description)
                .input('initial_contact', sql.NVarChar(sql.MAX), person.initial_contact)
                .input('comment', sql.NVarChar(sql.MAX), person.comment)
                .input('user_id', sql.Int, user.id)
                .execute(`RegisterNewPerson`);
        });
    }
    remove_schedule(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield new sql.Request(this.sql_pool)
                .input('person_schedule_id', sql.Int, id)
                .execute(`CancelPersonSchedule`);
        });
    }
    save_schedule(schedule) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield new sql.Request(this.sql_pool)
                .input('person_id', sql.Int, schedule.person_id)
                .input('branch_id', sql.Int, schedule.branch_id)
                .input('incident_type', sql.Int, schedule.incident_type)
                .input('recurrence_type', sql.Int, schedule.recurrence_type)
                .input('start_date', sql.VarChar(10), schedule.start_date)
                .input('start_hour', sql.Int, schedule.start_hour)
                .input('start_minute', sql.Int, schedule.start_minute)
                .input('end_date', sql.VarChar(10), schedule.end_date)
                .input('end_hour', sql.Int, schedule.end_hour)
                .input('end_minute', sql.Int, schedule.end_minute)
                .input('number_of_incidents', sql.Int, schedule.number_of_incidents)
                .input('description', sql.NVarChar(sql.MAX), schedule.description)
                .input('value', sql.Decimal(12, 2), schedule.value)
                .execute(`SavePersonScheduleAndGenerateIncidents`);
        });
    }
    remove_contact(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield new sql.Request(this.sql_pool)
                .input('contact_id', sql.Int, id)
                .execute(`RemovePersonContact`);
        });
    }
    save_contact(contact_data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield new sql.Request(this.sql_pool)
                .input('person_id', sql.Int, contact_data.person_id)
                .input('contact_type', sql.Int, contact_data.contact_type)
                .input('contact', sql.VarChar(250), contact_data.contact)
                .input('details', sql.VarChar(sql.MAX), contact_data.details)
                .input('principal', sql.Int, contact_data.principal)
                .execute(`SavePersonContact`);
        });
    }
    check_people_status() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield new sql.Request(this.sql_pool)
                .execute(`CheckPeopleStatus`);
            return result;
        });
    }
    save_comment_about(person_id, comment) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield new sql.Request(this.sql_pool)
                .input('person_id', sql.Int, person_id)
                .input('comment', sql.NVarChar(sql.MAX), comment)
                .execute(`SavePersonComment`);
            return result;
        });
    }
    archive_comment(comment_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield new sql.Request(this.sql_pool)
                .input('comment_id', sql.Int, comment_id)
                .execute(`ToglePersonCommentArchived`);
            return result;
        });
    }
}
exports.PersonService = PersonService;
//# sourceMappingURL=person_services.js.map