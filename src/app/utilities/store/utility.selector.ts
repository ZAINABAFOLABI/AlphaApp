import { createFeatureSelector } from "@ngrx/store";
import { Utility } from "./utility";


export const selectUtilities = createFeatureSelector<Utility[]>("myUtilities")
