
import cors from 'cors';
import express, { Router } from 'express';
import helmet from 'helmet';
import compression from 'compression';

import flightsRoutes from "./modules/flights"

class ExpressRouter {
    private readonly router: Router

    constructor() {
        this.router = express.Router()
    }

    public registerRoutes(): Router {
        this.router
            .use(express.json())
            .use(express.urlencoded({ extended: false }))
            .use(cors())
            .use(helmet.xssFilter())
            .use(helmet.noSniff())
            .use(helmet.hidePoweredBy())
            .use(helmet.frameguard({ action: 'deny' }))
            .use(compression());
        this.injectRoutes()

        return this.router
    }

    private injectRoutes() {
        this.router.use('/flights/api/v1', flightsRoutes.register(this.router))
        // Other routes...
    }
}

export default new ExpressRouter()