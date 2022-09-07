import { Request, Response, NextFunction } from "express";


class Middlewares {
    private middlewares: Array<(req: Request, res: Response, next?: NextFunction) => void | unknown>
    constructor() {
        this.middlewares = []
    }

    getMiddlewares(target?: string): Array<(req: Request, res: Response, next?: NextFunction) => void | unknown> {
        return this.middlewares
    }
}

export default new Middlewares();
