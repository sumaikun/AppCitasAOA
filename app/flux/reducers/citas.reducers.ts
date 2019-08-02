import { CitasActionTypes, All } from '../actions/citas.actions';

export interface State {
    DeliverAppointments: any[],
    DevolAppointments: any[]
}

export const initialState: State = {
    DeliverAppointments: [],
    DevolAppointments: []
};

export function reducer(state = initialState, action: All): State {

  switch (action.type) {
    case CitasActionTypes.SET_CITAS_ENT: {

      state = {
        ...state,
        DeliverAppointments: action.payload
      };

      //console.log("citas entrega");
      //console.log(state);

      return state;
    }
    case CitasActionTypes.SET_CITAS_DEV: {

      state = {
        ...state,
        DevolAppointments: action.payload
      };

      //console.log("citas de devolución");
      //console.log(state);

      return state;
    }
    default: {
      return state;
    }
  }
}
