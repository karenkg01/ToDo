import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state.interface";
import { GlobalState } from "./globals.reducer";

export const globalState = (state: AppState): GlobalState => state.globalState;

//take name of selector: take state and return session
//we use selectors to get things from reducers
export const sessionSelected = createSelector(
    globalState,
    (state: GlobalState) => state.session
);