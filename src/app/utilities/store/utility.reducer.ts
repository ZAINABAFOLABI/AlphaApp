import { createReducer } from "@ngrx/store";
import { Utility } from "./utility";

export const initialState: ReadonlyArray<Utility> = [];

export const utilityReducer = createReducer(initialState)
