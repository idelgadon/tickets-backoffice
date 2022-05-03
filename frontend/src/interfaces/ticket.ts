export interface Ticket {
	readonly id?: number;
	readonly uuid?: string;
	event: string;
	price: number;
	venue: string;
	is_sold: boolean;
}
