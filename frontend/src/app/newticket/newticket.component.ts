import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { Ticket } from 'src/interfaces/ticket';
import { TicketService } from 'src/service/ticketservice';

@Component({
	selector: 'app-newticket',
	templateUrl: './newticket.component.html',
	styleUrls: ['./newticket.component.scss']
})
export class NewticketComponent implements OnInit {
	event = "";
	price = 0;
	venue = "";
	is_sold = false;
	allFilled = false
	
	
	constructor(private ticketService: TicketService, private route: Router) { }

	ngOnInit(): void {
		console.log(this.event!=="")
	}

	async saveTicket() {
		const ticket: Ticket = {
			event: this.event,
			price: this.price*100,
			venue: this.venue,
			is_sold: this.is_sold
		}

		await this.ticketService.setTicket(ticket)
		this.route.navigate(['/'])
	}

	setChecked(event: MatSlideToggleChange) {
		this.is_sold = event.checked
	}

	updateFilled() {
		this.allFilled = this.event!=="" && this.venue !== "" && this.price > 0
	}
}
