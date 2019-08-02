import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "home", loadChildren: "./home/home.module#HomeModule" },
  { path: "login", loadChildren: "./login/login.module#LoginModule" },
  { path: "citas", loadChildren: "./citas/citas.module#CitasModule" },
  { path: "fotos", loadChildren: "./carPhotos/carPhotos.module#CarphotosModule" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
