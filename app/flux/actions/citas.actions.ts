import { Action } from '@ngrx/store';


export enum CitasActionTypes {
    SET_CITAS_ENT = '[CITAS] entrega',
    SET_CITAS_DEV = '[CITAS] devolucion',
    GET_CITAS_ENT = '[CITAS] getEnt',
    GET_CITAS_DEV = '[CITAS] getDev'
}

export class GetCitasEntrega implements Action {
  readonly type = CitasActionTypes.GET_CITAS_ENT;
  constructor(public payload: any) {}
}

export class GetCitasDevolucion implements Action {
  readonly type = CitasActionTypes.GET_CITAS_DEV;
  constructor(public payload: any) {}
}


export class SetCitasEntrega implements Action {
  readonly type = CitasActionTypes.SET_CITAS_ENT;
  constructor(public payload: any[]) {}
}

export class SetCitasDevolucion implements Action {
  readonly type = CitasActionTypes.SET_CITAS_DEV;
  constructor(public payload: any[]) {}
}

export type All =
    | SetCitasEntrega
    | SetCitasDevolucion
    | SetCitasDevolucion;
