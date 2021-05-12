/* import { ActionReducer } from "@ngrx/store";
import { LoggerOptions, storeLogger } from "ngrx-store-logger";
import { AppState } from "./app-state.interface";

export function logger(reducer: ActionReducer<AppState>):any {
    const options: LoggerOptions = {
        collapsed: true,
        filter: {
            blacklist: ['@ngrx/store/update-reducers', '@ngrx/effects/init']
        }
    }
    return storeLogger(options)(reducer);
} */