/* eslint-disable @typescript-eslint/no-explicit-any */
import { Newable } from "diod";

export const registeredInjectables: Newable<any>[] = [];

const Injectable = () => {
    return (target: Newable<any>): Newable<any> => {
        registeredInjectables.push(target);

        return target;
    };
};

export default Injectable;