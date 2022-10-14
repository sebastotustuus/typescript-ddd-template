import { Request, Response, NextFunction } from "express"

export abstract class FlighterController {
    abstract statusFlight(req: Request, res: Response, next: NextFunction): void
}