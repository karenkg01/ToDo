import { Injectable } from "@angular/core";
import { tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from "@ngrx/effects";

@Injectable()
export class GlobalEffects {
   

    constructor(
        private actions$: Actions,
    ) { }
}