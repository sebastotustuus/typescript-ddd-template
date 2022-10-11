import { Router } from 'express';
import flightController from './controllers';
import middlewares from './middlewares';

export const register = (router: Router) => {
    router.get('/', (req, res, next) => { });
    router.get('/status', middlewares.getMiddlewares(), flightController.statusFlight);
    router.get('/schedules', (req, res, next) => { });
    return router;
};