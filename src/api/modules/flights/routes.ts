import { Application, Router } from 'express';
import middlewares from './middlewares';
import { Container } from 'diod';
import { FlightController } from './controllers';

const router = Router()

export const register = (app: Application) => {
    const container: Container = app.get('container')
    router.get('/', (req, res, next) => { });
    router.get('/status', middlewares.getMiddlewares(), container.get(FlightController).statusFlight);
    return router;
};