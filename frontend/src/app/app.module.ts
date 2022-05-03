import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TicketService } from 'src/service/ticketservice';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NewticketComponent } from './newticket/newticket.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		TableModule,
		ButtonModule,
		MatSlideToggleModule,
		BrowserAnimationsModule,
		ProgressSpinnerModule,
		InputTextModule,
		FormsModule,
		ConfirmDialogModule
		
	],
	declarations: [
		AppComponent,
		TicketsComponent,
  		NewticketComponent
	],
	providers: [TicketService],
	bootstrap: [AppComponent]
})
export class AppModule { }
