import { ItemEventData } from "tns-core-modules/ui/list-view"
import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { Page } from "tns-core-modules/ui/page";
import { OfficefiltermodalComponent } from "../modals/officeFilterModal.component";
import { PlatefiltermodalComponent } from "../modals/plateFilterModal.component";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";
//flux
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState, selectAppState } from '../flux/app.states';
import { GetCitasEntrega , GetCitasDevolucion } from "../flux/actions/citas.actions";
import { IsFetching } from '../flux/actions/app.actions';

@Component({
	selector: "Citas",
	moduleId: module.id,
	templateUrl: "./citas.component.html",
	styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

	getState: Observable<any>;
	isFetching: boolean | null;

	deliverAppointments : { placa: string , hora: string , asegurado: string, conductor:string , id:number }[] = [];
	devolutionAppointments : { placa: string , hora: string, conductor: string, asegurado:string, id:number  }[] = [];

	TabTitle: string;
	infoDate: String;
	infoOffice: string;


  onItemTap(args: ItemEventData): void {
      console.log('Item with index: ' + args.index + ' tapped');
  }

	constructor(private page: Page, private modalService: ModalDialogService
			, private viewContainerRef: ViewContainerRef, private store: Store<AppState>) {



	}

	ngOnInit(): void {

		this.page.actionBarHidden = true;

		let self = this;

		this.store.select('loginFeature').subscribe( (state) =>
		{
				this.isFetching = state.app.isFetching;

				console.log("entrega");

				state.citas.DeliverAppointments ?  state.citas.DeliverAppointments.forEach( cita =>{
						console.log(cita.placa);

						let placa = cita.placa ? cita.placa: "";
						let hora = cita.hora ? cita.hora.substr(0,5): "";
						let asegurado = cita.asegurado_nombre ? cita.asegurado_nombre.substr(0,15): "";
						let conductor = cita.conductor_nombre ?  cita.conductor_nombre.substr(0,15): asegurado;
						let id = cita.citaid ? cita.citaid:"";

						this.deliverAppointments.push({placa,hora,asegurado,conductor,id});

				}) : null ;

				console.log("devolución");

				state.citas.DevolAppointments ? state.citas.DevolAppointments.forEach( cita =>{
					 console.log(cita.placa);

					 let placa = cita.placa ? cita.placa: "";
					 let hora = cita.hora_devol ? cita.hora_devol.substr(0,5): "";
					 let asegurado = cita.asegurado_nombre ? cita.asegurado_nombre.substr(0,15): "";
					 let conductor = cita.conductor_nombre ?  cita.conductor_nombre.substr(0,15): asegurado;
					 let id = cita.citaid ? cita.citaid:"";

					 this.devolutionAppointments.push({placa,hora,asegurado,conductor,id});

				}) : null;

				//console.log(state.auth);
				//console.log(state.offices.userOffices[state.auth.userData.datosFlota.oficina]);

				this.infoOffice = state.offices.userOffices[state.auth.userData.datosFlota.oficina].nombre;

		});


		this.TabTitle = "Citas de entrega";

		this.infoDate = new Date().getFullYear() + "-"
		+ ( new Date().getMonth() + 1 > 9 ?  new Date().getMonth() + 1 : "0"+ ( new Date().getMonth() + 1 ) )
		+ "-" +  ( new Date().getDate()  > 9 ?  new Date().getDate() : "0"+ ( new Date().getDate()  ) ) ;



	}

	officeSearch(): void {
			const options: ModalDialogOptions = {
					viewContainerRef: this.viewContainerRef,
					fullscreen: false,
					context: {}
			};
			this.modalService.showModal(OfficefiltermodalComponent, options);
	}

	plateSearch(): void {
			const options: ModalDialogOptions = {
					viewContainerRef: this.viewContainerRef,
					fullscreen: false,
					context: {}
			};
			this.modalService.showModal(PlatefiltermodalComponent, options);
	}

	onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
		this.TabTitle = args.newIndex == 0 ? "Citas de entrega":"Citas de devolución";
	}

}
