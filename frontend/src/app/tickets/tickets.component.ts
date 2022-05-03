import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/interfaces/ticket';
import { TicketService } from 'src/service/ticketservice';
import { ConfirmationService, SortEvent } from 'primeng/api';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';


@Component({
	selector: 'app-tickets',
	templateUrl: './tickets.component.html',
	styleUrls: ['./tickets.component.scss'],
	providers: [ConfirmationService]
})

export class TicketsComponent implements OnInit {
	tickets: Ticket[] = []
	cols: any[] = []
	loading = true
	

	constructor(private ticketService: TicketService, private confirmationService: ConfirmationService) { }

	ngOnInit() {
		this.refreshData()

        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'event', header: 'Event' },
            { field: 'price', header: 'Price' },
            { field: 'venue', header: 'Venue' },
            { field: 'is_sold', header: 'Sold out' }
        ]
	}

	refreshData() {
		this.ticketService.getTickets().then(data => this.tickets = data);
		this.loading = false
	}

	isBool(val:any): boolean {
		return typeof val === 'boolean'
	}

	async setSold(toggle: MatSlideToggleChange) {
		this.loading = true
		let uuid = toggle.source._elementRef.nativeElement.id
		let tickets = await this.ticketService.getTicketsRaw().then(data => data)
		let ticket = tickets.filter(ticket=>ticket.uuid==uuid)[0]
		await this.ticketService.setTicket({...ticket,is_sold: !ticket.is_sold})
		this.refreshData()
	}

	confirmDeleteTicket(ticket: Ticket) {
		console.log(ticket)
		this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected ticket?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
				if(typeof ticket.uuid === "string") {
					this.deleteTicket(ticket.uuid)
				}
                
            }
        });
	}
	


	async deleteTicket(uuid: string) {
		this.loading = true
		await this.ticketService.deleteTicket(uuid)
		this.refreshData()
	}

	customSort(event: SortEvent) {
        if(!!event.data) event.data.sort((data1, data2) => {
            let value1 = data1[event.field ?? 0];
            let value2 = data2[event.field ?? 0];
            let result = null;

            if (value1 == null && value2 != null)
                result = -1;
            else if (value1 != null && value2 == null)
                result = 1;
            else if (value1 == null && value2 == null)
                result = 0;
            else if (typeof value1 === 'string' && typeof value2 === 'string')
                result = value1.localeCompare(value2);
            else
                result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

            if(!event.order) return 0
			return (event.order * result);
        });
    }
}
