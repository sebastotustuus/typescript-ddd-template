import { ContainerBuilder } from "diod"
import { registeredInjectables } from "./injectable"
import { Newable } from "diod";

const builder = new ContainerBuilder();

export const buildContainer = () => {
    registeredInjectables.forEach((injectable: Newable<any>) => {
        builder.registerAndUse(injectable);
    });

    return builder.build();
};