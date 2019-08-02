import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ModalDialogService } from "nativescript-angular/modal-dialog";

import { CitasRoutingModule } from "./citas-routing.module";
import { CitasComponent } from "./citas.component";

//Comun components
import { AppSharedModule } from "../AppSharedModule";

//Modal Components
import { OfficefiltermodalComponent } from "../modals/officeFilterModal.component";
import { PlatefiltermodalComponent } from "../modals/plateFilterModal.component";

//flux
import { StoreModule } from '@ngrx/store';
import { reducers } from '../flux/app.states';


@NgModule({
	imports: [
		NativeScriptUISideDrawerModule,
		NativeScriptUIListViewModule,
		NativeScriptUICalendarModule,
		NativeScriptUIChartModule,
		NativeScriptUIDataFormModule,
		NativeScriptUIAutoCompleteTextViewModule,
		NativeScriptUIGaugeModule,
		NativeScriptCommonModule,
		NativeScriptFormsModule,
		CitasRoutingModule,
		AppSharedModule,
		StoreModule.forFeature('CitasFeature',reducers)
	],
	declarations: [
		CitasComponent,
		OfficefiltermodalComponent,
		PlatefiltermodalComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	],
	entryComponents: [
		OfficefiltermodalComponent,
		PlatefiltermodalComponent
	],
	providers: [ModalDialogService]
})
export class CitasModule { }
