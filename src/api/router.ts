
import cors from 'cors';
import express, { Application } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import { buildContainer as container } from '../infrastructure/di/container';
import flightsRoutes from "./modules/flights"

class ExpressRouter {
    private readonly app: Application
    
    constructor() {
        this.app = express()
    }

    public registerRoutes(): Application {
        this.app
            .use(express.json())
            .use(express.urlencoded({ extended: false }))
            .use(cors())
            .use(helmet.xssFilter())
            .use(helmet.noSniff())
            .use(helmet.hidePoweredBy())
            .use(helmet.frameguard({ action: 'deny' }))
            .use(compression());
        this.configIoC();
        this.injectRoutes();
        return this.app;
    }

    private injectRoutes() {
        this.app.use('/flights/api/v1', flightsRoutes.register(this.app))
        // Other routes...
    }

    private configIoC(){        
        this.app.set('container', container());
    }
}

export default new ExpressRouter()