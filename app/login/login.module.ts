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
import { HttpClientModule } from '@angular/common/http';



//main files
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";

//flux
import { AuthService } from '../services/auth.service';
import { OfficeService } from '../services/office.services';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '../flux/app.states';
import { AuthEffects } from '../flux/effects/auth.effects';
import { OfficeEffects } from '../flux/effects/offices.effects';


//loading and container Module
import { AppSharedModule } from "../AppSharedModule";



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
		LoginRoutingModule,
		HttpClientModule,
		AppSharedModule,
		StoreModule.forFeature('loginFeature',reducers)
	],
	declarations: [
		LoginComponent,
	],
	providers: [
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class LoginModule { }
