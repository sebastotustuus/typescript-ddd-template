import { Request, Response, NextFunction } from "express"

class FlightController {
    constructor() { }

    public async statusFlight(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.status(200).send()
    }
}

export default new FlightController()