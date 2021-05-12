import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state.interface";
import { GlobalState } from "./globals.reducer";

export const globalState = (state: AppState): GlobalState => state.globalState;

export const sessionSelected = createSelector(
    globalState,
    (state: GlobalState) => state.session
);