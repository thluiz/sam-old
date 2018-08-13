import appInsights = require("applicationinsights");

import { DependencyManager } from "./src/services/managers/dependency-manager";

import { DataRunningConfiguration } from "./src/services/managers/data-runner";
import { DatabaseManager } from "./src/services/managers/database-manager";

if (process.env.PRODUCTION !== "false") {
    // tslint:disable-next-line:no-var-requires
    require("dotenv").load();
} else {
    appInsights.setup(process.env.AZURE_APP_INSIGHTS);
    appInsights.start();
}

import "reflect-metadata";
import { ErrorCode } from "./src/helpers/errors-codes";

import * as old_routes from "./src/initializers/old-routes";
import * as passport from "./src/initializers/passport";
import * as routes from "./src/initializers/routes";

import { LoggerService, LogOrigins } from "./src/services/logger-service";

process.on("unhandledRejection", (reason, p) => {
    const error = new Error("Unhandled Rejection");
    LoggerService.error(ErrorCode.UnhandledRejection, error, { reason, p});
});

import bodyParser = require("body-parser");
import cors = require("cors");
import express = require("express");
import helmet = require("helmet");

const container = DependencyManager.container;

class ServerDataRunningConfiguration extends DataRunningConfiguration {
    constructor() {
        super();
        this.shouldCommit = true;
        this.useTransaction = true;
    }
}

container.bind<DatabaseManager>(DatabaseManager).toSelf().inSingletonScope();
container.bind<DataRunningConfiguration>(ServerDataRunningConfiguration).to(DataRunningConfiguration);

const app = express();
const port = process.env.port || process.env.PORT || 3979;

app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

passport.initialize(app);
old_routes.initialize(app);

routes.initialize(app, "./src/routes");

app.get(/^((?!\.).)*$/, (req, res) => {
    const path = "index.html";
    res.sendfile(path, { root: "./apex/public" });
});

app.use(express.static("./apex/public"));

app.listen(port, () => {
    LoggerService.info(LogOrigins.General, `server listening to ${port}`);
});
