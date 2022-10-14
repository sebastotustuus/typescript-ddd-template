import { Request, Response, NextFunction } from "express"
import { FlighterController } from "../../../core/domain/flights/controller"
import { FlighterService } from "../../../core/domain/flights/service"
import { MyAppService } from "../../../infrastructure/di/injectable"

@MyAppService()
export class FlightController implements FlighterController {
    constructor(private readonly flightService: FlighterService) { }

    public async statusFlight(req: Request, res: Response, next: NextFunction): Promise<void> {
        const id = this.flightService.getById(1)
        res.status(200).json({ id })
    }
}
