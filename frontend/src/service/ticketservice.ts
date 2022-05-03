import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Ticket } from 'src/interfaces/ticket';
import { TableModule } from 'primeng/table';

@NgModule({    
	imports: [ HttpClientModule ]
})

@Injectable()
export class TicketService {
    constructor(private http: HttpClient) {}

	
	processData(tickets: Ticket[]) {
		const currency = "€";
		let processedTickets:any[] = []
		for (let ticket of tickets){
			processedTickets.push({
				id: ticket.id,
				uuid: ticket.uuid,
				event: ticket.event,
				price: `${(ticket.price / 100).toFixed(2) ?? "-"}${currency}`,
				venue: ticket.venue,
				is_sold: ticket.is_sold
			})
		}
		return processedTickets
	}

    getTickets() {
        return this.http.get('http://localhost:3000/tickets')
		.toPromise()
		.then(data => this.processData(<Ticket[]> data))
    }
    
	getTicketsRaw() {
        return this.http.get('http://localhost:3000/tickets')
		.toPromise()
		.then(data => <Ticket[]> data)
    }

    deleteTicket(uuid: string) {
        return this.http.delete(`http://localhost:3000/tickets/${uuid}`)
		.toPromise()	
		.then((data:any)=>data)
    }

	setTicket(ticket: Ticket){
		console.log(ticket)
		return this.http.put('http://localhost:3000/tickets',
			ticket,
			{
				headers: {
				  'Content-Type': 'application/json'
				}
			}
		)
		.toPromise()	
		.then((data:any)=>data)
	}
}