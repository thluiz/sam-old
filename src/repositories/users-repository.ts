import { User } from "../entity/User";
import { BaseRepository } from "./base-repository";

import { cache } from "../decorators/cache-decorator";
import { tryLogAsync } from "../decorators/trylog-decorator";
import { Result, SuccessResult } from "../helpers/result";

export class UsersRepository extends BaseRepository<User> {

    constructor() {
        super(User);
    }

    @cache(true, 10000)
    @tryLogAsync()
    async loadAllUserData(userId): Promise<Result<User>> {
        const UR = await this.getRepository();

        const user = await UR.manager
            .createQueryBuilder(User, "u")
            .innerJoinAndSelect("u.person", "p")
            .leftJoinAndSelect("p.default_page", "dp")
            .where("u.id = :id", { id: userId })
            .cache(10000)
            .getOne();

        return SuccessResult.GeneralOk(user);
    }

    @cache(true, 100000)
    @tryLogAsync()
    async getUserByToken(token): Promise<Result<User>> {
        const UR = await this.getRepository();

        const user = await UR.manager
            .createQueryBuilder(User, "u")
            .where("u.token = :token", { token })
            .cache(10000)
            .getOne();

        return SuccessResult.GeneralOk(user);
    }

    @cache(true, 10000)
    @tryLogAsync()
    async getUserByEmail(email): Promise<Result<User>> {
        const UR = await this.getRepository();

        const user = await UR.manager
            .createQueryBuilder(User, "u")
            .where("u.email = :email", { email })
            .cache(10000)
            .getOne();

        return SuccessResult.GeneralOk(user);
    }

}
