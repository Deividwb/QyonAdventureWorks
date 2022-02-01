import { Runner } from "./runner";
import { RunWay } from "./runway";

export type RunWayStorage = {
    runners:Runner[];
    runways:RunWay[];
    dateRunWay:string;
    usedTime:number;
}