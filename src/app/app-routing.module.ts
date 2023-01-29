import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ServerComponent } from "./server/server.component";
import { UserComponent } from "./user/user.component";

const appRouting: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'user/:id', component: UserComponent },
    {path: 'server', component: ServerComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRouting)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}