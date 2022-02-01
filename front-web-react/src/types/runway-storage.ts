import { Runner } from "./runner";
import { RunWay } from "./runway";

export type RunWayStorage = {
    id:number;
    runners:Runner[];
    runways:RunWay[];
    dateRunWay:string;
    usedTime:number;
}