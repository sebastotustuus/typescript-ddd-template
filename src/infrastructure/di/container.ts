import { ContainerBuilder } from "diod"
import { FlightController } from "../../api/modules/flights/controllers";
import FlightService from "../../core/services/flights/flightService";

// import { registeredInjectables } from "./injectable"
// import { Newable } from "diod";

const builder = new ContainerBuilder();

export const buildContainer = () => {
    // registeredInjectables.forEach((injectable: Newable<any>) => {
    //     builder.registerAndUse(injectable);        
    // });
    builder.registerAndUse(FlightController)
    builder.registerAndUse(FlightService)

    return builder.build({ autowire: true });
};