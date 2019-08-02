import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { CarphotosComponent } from "./carPhotos.component";


const routes: Routes = [
	{ path: "", component: CarphotosComponent },
];

@NgModule({
	imports: [NativeScriptRouterModule.forChild(routes)],
	exports: [NativeScriptRouterModule]
})
export class CarphotosRoutingModule { }