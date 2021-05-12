import { createAction, props } from "@ngrx/store";
import { Session } from "../../models/session";



 export const actionOnPageLoad = createAction(
    '[Global] User ID Page was Loaded',
    props<{ session:Session }>()
); 