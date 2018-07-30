import { filter } from 'rxjs/operators';
import { Repository, QueryRunner } from 'typeorm';
import { DatabaseManager } from "../services/managers/database-manager";
import { Result } from "../helpers/result";
import { ErrorCode } from "../helpers/errors-codes";
import { trylog } from "../decorators/trylog-decorator";
import showdown = require('showdown');
import { Incident } from "../entity/Incident";
import { cache } from '../../node_modules/@types/ejs';

const converter = new showdown.Converter();
const DBM = new DatabaseManager();

export class IncidentsRepository {

    @trylog()
    static async getRepository(runner? : QueryRunner): Promise<Repository<Incident>> {
        return await DBM.getRepository<Incident>(Incident, runner);
    }

    @trylog()
    static async getAvailableOwnerships(branch_id, date, type): Promise<Result<Incident>> {
        let result = await DBM.ExecuteJsonSP<Incident>("GetAvailableOwnerships",
            { "branch_id": branch_id },
            { "date": date },
            { "type": type }
        );

        return result;
    }

    @trylog()
    static async getCurrentActivities(branch_id): Promise<Result<any>> {
        let result = await DBM.ExecuteJsonSP("GetCurrentActivities",
            { "branch_id": branch_id }
        );

        return result;
    }

    private static summary_cache : { branch: number,
        date: any,
        week_modifier: number,
        lastcall: number,
        result: Result<any>
    }[] = [];

    @trylog()
    static async getPeopleSummary(branch_id, week_modifier, date): Promise<Result<any>> {
        this.summary_cache = this.summary_cache
        .filter(c => c.lastcall < ((new Date()).getTime() - 10000)); // clear every 10 seconds

        let cached = this.summary_cache = this.summary_cache
        .filter(c => c.branch == branch_id
                    && c.week_modifier == week_modifier
                    && c.date == date);

        if(cached.length > 0) {
            return cached[0].result;
        }

        let result = await DBM.ExecuteJsonSP("GetPeopleSummary",
            { "branch": branch_id },
            { "week_modifier": week_modifier },
            { "date": date }
        );

        this.summary_cache.push({
            branch: branch_id,
            week_modifier: week_modifier,
            date: date,
            lastcall: (new Date()).getTime(),
            result
        })

        return result;
    }

    @trylog()
    static async getSummary(branch_id, month_modifier, week_modifier, date): Promise<Result<any>> {
        return await DBM.ExecuteJsonSP("GetPeopleSummary",
            { "branch": branch_id },
            { "month_modifier": month_modifier },
            { "week_modifier": week_modifier },
            { "date": date }
        );
    }

    @trylog()
    static async getDailyMonitor(branch_id, display, display_modifier): Promise<Result<any>> {
        return await DBM.ExecuteJsonSP("GetDailyMonitor2",
            { "branch": branch_id },
            { "display_modifier": display_modifier },
            { "display": display }
        );
    }

    @trylog()
    static async getPersonIncidentsHistory(person_id, start_date, end_date, activity_type): Promise<Result<any>> {
        return await DBM.ExecuteJsonSP("GetPersonIncidentHistory2",
            { "person_id": person_id },
            { "start_date": start_date },
            { "end_date": end_date },
            { "activity_type": activity_type }
        );
    }

    @trylog()
    static async getIncidentDetails(incident_id): Promise<Result<any>> {
        return await DBM.ExecuteJsonSP("GetIncidentDetails",
            { "id": incident_id }
        );
    }

    @trylog()
    static async getAgenda(branch_id, date): Promise<Result<any>> {
        return await DBM.ExecuteJsonSP("GetAgenda2",
            { "branch_id": branch_id },
            { "date": date }
        );
    }

    @trylog()
    static async getOwnershipData(id: number): Promise<Result<any>> {
        const ownership_data = await DBM.ExecuteJsonSP("getOwnershipData", {
            "ownership_id": id
        });

        const data = ownership_data.data[0];

        for (var i = 0; i < data.incidents.length; i++) {
            if (data.incidents[i].description) {
                const d = data.incidents[i].description.replace(/\r?\n/g, "<br />");
                console.log(d);
                data.incidents[i].description = converter.makeHtml(d);
            }
            if (data.incidents[i].close_text) {
                const d = data.incidents[i].close_text.replace(/\r?\n/g, "<br />");
                data.incidents[i].close_text = converter.makeHtml(d);
            }
        }

        return Result.GeneralOk(data);
    }
}