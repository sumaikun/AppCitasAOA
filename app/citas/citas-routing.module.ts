import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { CitasComponent } from "./citas.component";


const routes: Routes = [
	{ path: "", component: CitasComponent },
];

@NgModule({
	imports: [NativeScriptRouterModule.forChild(routes)],
	exports: [NativeScriptRouterModule]
})
export class CitasRoutingModule { }