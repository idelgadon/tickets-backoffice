import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewticketComponent } from './newticket/newticket.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
	{ path: '', component: TicketsComponent },
	{ path: 'new', component: NewticketComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
