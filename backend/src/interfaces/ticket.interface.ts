export interface Ticket {
	readonly uuid: string;
	event: string;
	price: number;
	venue: string;
	is_sold: boolean;
}
