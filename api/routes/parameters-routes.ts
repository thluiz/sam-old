import * as sql from 'mssql';
import { SecurityService } from '../../domain/services/security_services';

export function configure_routes(app: any, connection_pool: any) {
    const pool = connection_pool;

    app.get("/api/branches/:id?", 
    SecurityService.ensureLoggedIn(),
    async (req, res, next) => {                        
        if(!req.params.id) {
            const result = await new sql.Request(pool)            
            .execute(`GetBranches`);                

            res.send(result.recordset[0]);
        } else {
            const result = await new sql.Request(pool)   
            .input("branch", sql.Int, req.params.id)                   
            .query(`select * from vwBranch where id = @branch for json path`);                
            
            let response = result.recordset[0];

            res.send(response[0].empty ? [] : response);
        }
    });

    app.get("/api/domains", 
    SecurityService.ensureLoggedIn(),
    async (request, response, next) => {                        
        const result = await new sql.Request(pool)            
        .execute(`GetDomains`);                

        response.send(result.recordset[0]);
    });

    app.get("/api/programs", 
    SecurityService.ensureLoggedIn(),
    async (request, response, next) => {                        
        const result = await new sql.Request(pool)            
        .execute(`GetPrograms`);                

        response.send(result.recordset[0]);
    });

    app.get("/api/countries", 
    SecurityService.ensureLoggedIn(),
    async (request, res, next) => {                        
        const result = await new sql.Request(pool)            
        .query(`select * from [country] order by [order] for json path`);                
        
        let response = result.recordset[0];

        res.send(response[0].empty ? [] : response);
    });

    app.get("/api/kf_families", 
    SecurityService.ensureLoggedIn(),
    async (request, response, next) => {                        
        const result = await new sql.Request(pool)            
        .execute(`GetKungFuFamilies`);                

        response.send(result.recordset[0]);
    });

    app.get("/api/recurrence_types", 
    SecurityService.ensureLoggedIn(),
    async (request, response, next) => {                        
        const result = await new sql.Request(pool)            
        .execute(`GetRecurrenceTypes`);                

        response.send(result.recordset[0]);
    });

    app.get("/api/incident_types", 
    SecurityService.ensureLoggedIn(),
    async (request, response, next) => {                        
        const result = await new sql.Request(pool)            
        .execute(`GetIncidentTypes`);                

        response.send(result.recordset[0]);
    });

    app.get("/api/contact_types", 
    SecurityService.ensureLoggedIn(),
    async (request, response, next) => {                        
        const result = await new sql.Request(pool)            
        .execute(`GetContactTypes`);                

        response.send(result.recordset[0]);
    });

    app.get("/api/roles", 
    SecurityService.ensureLoggedIn(),
    async (request, response, next) => {                        
        const result = await new sql.Request(pool)            
        .execute(`GetRoles`);                

        response.send(result.recordset[0]);
    });

    app.get("/api/groups", 
    SecurityService.ensureLoggedIn(),
    async (req, res, next) => {                        
        const result = await new sql.Request(pool)            
        .query(`select * from [group] where active = 1 order by [order] for json path`);                
        
        let response = result.recordset[0];

        res.send(response[0].empty ? [] : response);
    });

    app.get("/api/locations", 
    SecurityService.ensureLoggedIn(),
    async (req, res, next) => {                        
        const result = await new sql.Request(pool)            
        .query(`select * from [location] where active = 1 order by [order] for json path`);                
        
        let response = result.recordset[0];

        res.send(response[0].empty ? [] : response);
    });

    app.get("/api/payment_methods", 
    SecurityService.ensureLoggedIn(),
    async (req, res, next) => {                        
        const result = await new sql.Request(pool)            
        .query(`select * from payment_method where active = 1 order by [order] for json path`);                
        
        let response = result.recordset[0];

        res.send(response[0].empty ? [] : response);
    });

    app.get("/api/acquirers", 
    SecurityService.ensureLoggedIn(),
    async (req, res, next) => {                        
        const result = await new sql.Request(pool)            
        .query(`select * from acquirer where active = 1 order by [order] for json path`);                
        
        let response = result.recordset[0];

        res.send(response[0].empty ? [] : response);
    });


    /**
     * UPDATES
     */

    app.post("/api/branches", 
    SecurityService.ensureLoggedIn(),
    async (req, res, next) => {                        
        const branch = req.body.branch;

        const result = await new sql.Request(pool)            
        .input('id', sql.Int, branch.id)          
        .input('name', sql.VarChar(100), branch.name)
        .input('abrev', sql.VarChar(100), branch.abrev)
        .input('initials', sql.VarChar(3), branch.initials)
        .query(`update branch set
                    name = @name,
                    abrev = @abrev,
                    initials = @initials
                where id = @id`);         

        res.send({ sucess: true});   
    });

    app.post("/api/payment_methods", 
    SecurityService.ensureLoggedIn(),
    async (req, res, next) => {                        
        const payment_method = req.body.payment_method;

        if(payment_method.id > 0) {
            const result = await new sql.Request(pool)            
            .input('id', sql.Int, payment_method.id)          
            .input('name', sql.VarChar(100), payment_method.name)
            .input('order', sql.Int, payment_method.order)        
            .query(`update payment_method set
                        name = @name,
                        [order] = @order
                    where id = @id`);         
        } else {
            const result = await new sql.Request(pool)                        
            .input('name', sql.VarChar(100), payment_method.name)
            .input('order', sql.Int, payment_method.order)        
            .query(`insert into payment_method (name, [order])
                    values (@name, @order)`);         
        }

        res.send({ sucess: true});   
    });

    app.post("/api/acquirers", 
    SecurityService.ensureLoggedIn(),
    async (req, res, next) => {                        
        const acquirer = req.body.acquirer;

        if(acquirer.id > 0) {
            const result = await new sql.Request(pool)            
            .input('id', sql.Int, acquirer.id)          
            .input('name', sql.VarChar(100), acquirer.name)
            .input('order', sql.Int, acquirer.order)        
            .query(`update acquirer set
                        name = @name,
                        [order] = @order
                    where id = @id`);         
        } else {
            const result = await new sql.Request(pool)                        
            .input('name', sql.VarChar(100), acquirer.name)
            .input('order', sql.Int, acquirer.order)        
            .query(`insert into acquirer (name, [order])
                    values (@name, @order)`);         
        }

        res.send({ sucess: true});   
    });

    app.post("/api/branches_acquirers", 
    SecurityService.ensureLoggedIn(),
    async (req, res, next) => {                                
        const result = await new sql.Request(pool)            
        .input('branch_id', sql.Int, req.body.branch_id)          
        .input('acquirer_id', sql.Int, req.body.acquirer_id)
        .execute(`ToggleBranchAcquirerAssociation`);         

        res.send({ sucess: true});   
    });

}