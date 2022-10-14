import { FlighterService } from "../../domain/flights/service";
import { MyAppService } from "../../../infrastructure/di/injectable";

@MyAppService()
export default class FlightService implements FlighterService {

    constructor() { }

    create(flight: unknown): void {
        console.log("Creating...")
    }
    getById(id: number): any {
        return { id: "18148a2g1y7i475t12d1cb7j8i6u32gd12144ef1b10" }
    }

}