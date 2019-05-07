import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { AppComponent } from './app.component';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full'
    },
    {
        path: 'app',
        component: AppComponent
    },
    {
        path: 'thank-you',
        component: ThankYouComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
